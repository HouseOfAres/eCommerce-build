import React, { useState, useEffect } from 'react';
import AddQuestion from './AddQuestion.jsx';
import AddQ from './AddQ.jsx';
import Question from './Question.jsx';

const QuestionsList = (props) => {

  const [toggleMoreQuestionsButton, setToggleMoreQuestionsButton] = useState(true);
  const [questionData, setQuestionData] = useState(props.questionList);
  questionData.sort(function (a, b) {
    return b.question_helpfulness - a.question_helpfulness;
  });
  const [questionList, setQuestionList] = useState(questionData.slice(0, 4));
  const [questionIndex, setQuestionIndex] = useState(4);
  const [showModal, setShowModal] = useState(false);


  // More Questions Button
  const moreQuestionsHandler = () => {

    const updateIndex = questionIndex + 2;
    setQuestionIndex(updateIndex)

    const updateQuestionList = questionData.slice(0, updateIndex);
    setQuestionList(updateQuestionList);

    if (updateIndex >= questionData.length) {
      setToggleMoreQuestionsButton(false);
    }
  }

  const showModalHandler = e => {
    setShowModal(!showModal);
  }

  const handleOutsideClick = e => {
    if (!node.contains(e.target)) showModalHandler();
  };

  // const filterQuestions = () => {
  //   let result = []
  //   for (var i = 0; i < questionList.length; i++) {
  //     let currentQ = questionList[i];
  //     if (Object.keys(currentQ.answers).length === 0) {
  //       continue;
  //     } else {
  //       result.push(currentQ);
  //     }
  //   }
  //   return result;
  // }
  // filterQuestions(questionList);

  // console.log(filterQuestions);


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