import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {

  const questionData = props.questionData;
  const [searchQuery, setSearchQuery] = useState('');
  const [noMatches, setNoMatches] = useState(false);
  let currentQueryResults = questionData;

  useEffect(() => {

    if (searchQuery === '') {
      props.setQuestionList(questionData);
      setNoMatches(false)
    } else {
      currentQueryResults = [];
      questionData.forEach(question => {
        const questionLowerCase = question.question_body.toLowerCase();
        const searchLowerCase = searchQuery.toLowerCase();
        if (questionLowerCase.includes(searchLowerCase)) {
          setNoMatches(false);
          currentQueryResults.push(question);
        }
        if (questionLowerCase.includes(searchLowerCase) && searchLowerCase.length >= 3) {
          let start = questionLowerCase.indexOf(searchLowerCase);
          let end = start + searchLowerCase.length;

        }
      })

      if (currentQueryResults.length) {
        props.setQuestionList(currentQueryResults);
        setNoMatches(false);
      } else {
        props.setQuestionList([])
        setNoMatches(true);
      }
    }
  }, [searchQuery]);

  const searchChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchBar_container">
      <form onSubmit={e => { e.preventDefault(); }}>
        <input
          className="searchbar"
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={searchChangeHandler}
        >
        </input>
        <div><i className="fas fa-search"></i></div>
      </form>
      {noMatches === true && <h3 className="noMatch">Oops! Nothing to see here...</h3>}
    </div>
  )
};

export default SearchBar;