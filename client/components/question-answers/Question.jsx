import React, { useState } from 'react';
import Answers from './Answers.jsx';

const Question = (props) => {

  const answers = Object.values(props.item.answers);
  answers.sort(function (a, b) {
    return b.helpfulness - a.helpfulness;
  });
  const [toggleMoreAnswersButton, setToggleMoreAnswersButton] = useState(true);
  const [firstTime, setFirstTime] = useState(true);
  const [answerData, setAnswerData] = useState(answers);
  const [answerList, setAnswerList] = useState(answerData.slice(0, 2));
  const [answerIndex, setAnswerIndex] = useState(2);

  if (answers.length <= 2 && firstTime) {
    setToggleMoreAnswersButton(false);
    setFirstTime(false);
  }

  // More Answers Button
  const moreAnswersHandler = () => {

    const updateIndex = answerIndex + 2;
    setAnswerIndex(updateIndex)

    const updateAnswerList = answerData.slice(0, updateIndex);
    setAnswerList(updateAnswerList);

    if (updateIndex >= answers.length) {
      setToggleMoreAnswersButton(false);
    }
  }

  return (
    <div className="q_a_container">
      <div className="questions">
        <h3>
          Q: <span className="q_a_question_text">{props.item.question_body}</span>
        </h3>
        <span id="q_a_helpful_add">
          Helpful? <u>Yes</u> ({props.item.question_helpfulness}) | <u>Add Answer</u>
        </span>
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
      <hr></hr>
    </div>
  )
};

export default Question;