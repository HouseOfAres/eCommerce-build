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
          Q: {props.item.question_body}
        </h3>
        <span id="q_a_helpful_add">
          Helpful? <u>Yes</u> ({props.item.question_helpfulness}) | <u>Add Answer</u>
        </span>
      </div>
      {answers.map(item => {
        return <Answers key={item.id} answer={item}/>
      })}

    </div>
  )
};

export default Question;