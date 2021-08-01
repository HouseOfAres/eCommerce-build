import React, { useState, useEffect } from 'react';
import AddQuestion from './AddQuestion.jsx';
import AddQ from './AddQ.jsx';
import Question from './Question.jsx';

const QuestionsList = (props) => {

  const mainQuestionList = props.questionList;
  const [toggleMoreQuestionsButton, setToggleMoreQuestionsButton] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(4);
  let questionList = mainQuestionList
  .sort((a, b) => {
    return b.question_helpfulness - a.question_helpfulness;
  })
  .slice(0, questionIndex);

  const [showModal, setShowModal] = useState(false);


  // More Questions Button
  const moreQuestionsHandler = () => {

    const updateIndex = questionIndex + 2;
    setQuestionIndex(updateIndex)

    const updateQuestionList = questionList.slice(0, updateIndex);

    if (updateIndex >= mainQuestionList.length) {
      setToggleMoreQuestionsButton(false);
    }
  }

  const showModalHandler = e => {
    setShowModal(!showModal);
  }

  const handleOutsideClick = e => {
    if (!node.contains(e.target)) showModalHandler();
  };


  return (
    <div
      ref={node => {
        node = node;
      }}
    >
      {questionList.map((item) =>
        <Question currentProduct={props.currentProduct} item={item} key={item.question_id} handleClose={showModalHandler} />
      )}
      <div className="q_a_buttons">
        {toggleMoreQuestionsButton &&
          <input
            className="buttons"
            type='button'
            value="MORE ANSWERED QUESTIONS"
            onClick={() => { moreQuestionsHandler() }}
          />
        }
        {showModal &&
          <AddQ currentProduct={props.currentProduct} handleClose={showModalHandler} />
        }
        <input
          className="buttons"
          type='button'
          value="ADD A QUESTION +"
          onClick={showModalHandler}
        />
      </div>
    </div>
  )
};

export default QuestionsList;