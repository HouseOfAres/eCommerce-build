import React, { useState } from 'react';
import questions from '../../../mock-data/questions-data.js';

const QaButtons = (props) => {

  const questionData = props.questionData;
  const [toggleMoreQuestionsButton, setToggleMoreQuestionsButton] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(4);
  const [question, setProductID] = useState(questions.questions);

  if (questionData.length === 0) {
    setToggleMoreQuestionButton(false);
  }
  // More Questions Button
  const moreQuestionsHandler = () => {

    const updateIndex = questionIndex + 2;
    setQuestionIndex(updateIndex)

    const updateQuestionList = questionData.slice(0, updateIndex);
    props.setQuestionList(updateQuestionList);

    if (updateIndex >= questionData.length) {
      setToggleMoreQuestionsButton(false);
    }
  }

  return (

    <div className="q_a_buttons">
      {toggleMoreQuestionsButton &&
        <button
          className="buttons"
          type="submit"
          onClick={() => { moreQuestionsHandler() }}>
          MORE ANSWERED QUESTIONS
        </button>
      }
      <button
        className="buttons"
        type="submit">
        ADD A QUESTION +
      </button>
    </div>
  )
};

export default QaButtons;