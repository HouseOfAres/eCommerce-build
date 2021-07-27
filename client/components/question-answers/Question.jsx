import React, { useState } from 'react';
import Answers from './Answers.jsx';

const Question = (props) => {

  const answers = Object.values(props.item.answers);

  return (
    <div className="q_a_container">
      <div className="questions">
        <span id="q_a_text">
          Q: {props.item.question_body}
        </span>
      </div>
      {answers.map(item => {
        return <Answers key={item.id} answer={item} />
      })}

    </div>
  )
};

export default Question;