import React, { useState } from 'react';
import Answers from './Answers.jsx';

const Question = (props) => {
  const answers = Object.values(props.item.answers);

  answers.sort(function (a, b) {
    return b.helpfulness - a.helpfulness;
  });

  return (
    <div className="q_a_container">
      <div className="questions">
        <h3>
          Q: <span class="q_a_question_text">{props.item.question_body}</span>
        </h3>
        <span id="q_a_helpful_add">
          Helpful? <u>Yes</u> ({props.item.question_helpfulness}) | <u>Add Answer</u>
        </span>
      </div>
      {answers.map((item, i) =>
        <Answers index={i} key={item.id} answer={item} />
      )}
      <hr></hr>
    </div>
  )
};

export default Question;