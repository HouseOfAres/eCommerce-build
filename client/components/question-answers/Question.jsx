import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';
import AddAnswer from './AddAnswer.jsx';
import access from '../../../config.js';
import axios from 'axios';

const Question = (props) => {

  const answers = Object.values(props.item.answers);
  answers.sort(function (a, b) {
    return b.helpfulness - a.helpfulness;
  });
  const [currentProduct, setCurrentProduct] = useState(props.currentProduct);
  const [toggleMoreAnswersButton, setToggleMoreAnswersButton] = useState(true);
  const [firstTime, setFirstTime] = useState(true);
  const [answerData, setAnswerData] = useState(answers);
  const [answerList, setAnswerList] = useState(answerData.slice(0, 2));
  const [answerIndex, setAnswerIndex] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [questionHelpfulness, setQuestionHelpfulness] = useState(props.item.question_helpfulness);
  const [firstVote, setFirstVote] = useState(true)
  let questionId = props.item.question_id;


  // Update Question Helpful Number
  let newQuestionObj = {
    question_helpfulness: questionHelpfulness,
  }

  const addHelpfulness = () => {
    if (firstVote) {
      const addOne = props.item.question_helpfulness + 1;
      setQuestionHelpfulness(addOne);
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/helpful`, newQuestionObj, {
        headers: { 'Authorization': `${access.TOKEN}` }
      });
      setFirstVote(false);
    } else {
      console.log('You already voted!')
    }
  }


  // More Answers Button
  if (answers.length <= 2 && firstTime) {
    setToggleMoreAnswersButton(false);
    setFirstTime(false);
  }

  const moreAnswersHandler = () => {

    const updateIndex = answerIndex + 2;
    setAnswerIndex(updateIndex)

    const updateAnswerList = answerData.slice(0, updateIndex);
    setAnswerList(updateAnswerList);

    if (updateIndex >= answers.length) {
      setToggleMoreAnswersButton(false);
    }
  }

  const showModalHandler = e => {
    setShowModal(!showModal);
  }


  return (
    <>
      <div className="q_a_container">
        <div className="questions">
          <h3>
            Q: <span id="q_a_question_text">{props.item.question_body}</span>
          </h3>
          {showModal &&
            <AddAnswer forms={document.forms} productName={currentProduct.name} questionBody={props.item.question_body} handleClose={() => { showModalHandler() }} />
          }
          <div className="q_a_helpful_add">
            Helpful? <div className="q_a_helpful_yes" onClick={addHelpfulness}><u>Yes</u></div> ({questionHelpfulness}) | <div className="add_answer_pop_up" onClick={() => { showModalHandler() }}>Add Answer</div>
          </div>
        </div>
        {answerList.map((item, i) =>
          <Answers index={i} key={item.id} answer={item} />
        )}
        {toggleMoreAnswersButton &&
          <div
            className="load_more_answers"
            onClick={() => { moreAnswersHandler() }}>
            <strong>LOAD MORE ANSWERS</strong>
          </div>
        }
      </div>
      <hr></hr>
    </>
  )
};

export default Question;