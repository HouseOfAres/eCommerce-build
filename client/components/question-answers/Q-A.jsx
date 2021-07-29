import React, { useState, useEffect } from 'react';
import questions from '../../../mock-data/questions-data.js';
import QuestionsList from './QuestionsList.jsx';

// import React { useState } from 'react;'

// CHANGE NAME HERE
const App = () => {

  const questionData = questions.questions.results;

  const [toggleMoreQuestionsButton, setToggleMoreQuestionsButton] = useState(true);
  const [questionList, setQuestionList] = useState(questionData.slice(0, 4));
  const [questionIndex, setQuestionIndex] = useState(4);
  const [question, setProductID] = useState(questions.questions);

  if (questionData.length === 0) {
    setToggleMoreQuestionButton(false);
  }

  // More Questions Button
  const moreQuestionsHandler = (e) => {

    e.preventDefault();
    const updateIndex = questionIndex + 2;
    setQuestionIndex(updateIndex)

    console.log(updateIndex);

    const updateQuestionList = questionData.slice(0, questionIndex);
    setQuestionList(updateQuestionList);

    if (questionIndex >= questionData.length) {
      setToggleMoreQuestionsButton(false);
    }
  }


  return (
    <div className="component">
      <div className="q_a_component">
        <div className="component_title">QUESTIONS & ANSWERS</div>
        <div className="searchBar_container">
          <form>
            <input className="searchbar" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...">
            </input>
          </form>
        </div>
        <QuestionsList questionList={questionList} />
        <div className="q_a_buttons">
          {toggleMoreQuestionsButton &&
            <button
              className="buttons"
              type="submit"
              onClick={() => moreQuestionsHandler}>
              MORE ANSWERED QUESTIONS
            </button>
          }
          <button
            className="buttons"
            type="submit">
            ADD A QUESTION +
          </button>
        </div>
      </div>
    </div>
  )

}

// CHANGE EXPORT HERE
export default App;