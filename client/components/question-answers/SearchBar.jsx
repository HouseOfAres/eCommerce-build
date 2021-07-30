import React, { useState, useEffect } from 'react';
import questions from '../../../mock-data/questions-data.js';

const SearchBar = (props) => {

  const questionData = props.questionData;

  const [searchQuery, setSearchQuery] = useState('');
  const [queryInit, setQueryInit] = useState(questionData);
  const [noMatches, setNoMatches] = useState(false);


  useEffect(() => {
    setNoMatches(false);

    if (searchQuery === '') {
      console.log(queryInit)
      props.setQuestionList(questionData);
      setQueryInit([])
    } else {
      const currentQueryResults = [];
      questionData.forEach(question => {
        const lowercase = question.question_body.toLowerCase();

        if (lowercase.includes(searchQuery.toLowerCase())) {
          currentQueryResults.push(question);
          setQueryInit(currentQueryResults);
        }
        if (queryInit.length) {
          props.setQuestionList(queryInit);
          setNoMatches(false);
        } else {
          console.log('hello');
          props.setQuestionList([])
          setNoMatches(true);

        }

      })
    }
  }, [searchQuery]);

  const searchChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  // onChange should search through all the available questions and display the results
  // should check to see if the questions include the text written in the search bar
  // should ignore upper/lower case
  // pass all questions as props to searchbar but set the display to null
  // onChange, update the questionList in Q-A
  // or if search is empty, show questionList
  // if text is entered in search, render new list of questions with matching text
  return (
    <div className="searchBar_container">
      <form>
        <input
          className="searchbar"
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={searchChangeHandler}
        >
        </input>
      </form>
      {noMatches === true && <h3 className="noMatch">Oops! Nothing to see here...</h3>}
    </div>
  )
};

export default SearchBar;