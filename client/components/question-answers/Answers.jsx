import React, { useState } from 'react';
import moment from 'moment';

const Answers = (props) => {
  return (
    <div className="answers">
      <span id="q_a_text">
        A: </span>
      <span>
        {props.answer.body}
      </span>
      <div className="q_a_footer">
        by {props.answer.answerer_name}, {moment(props.answer.date).format('ll')} | Helpful? Yes ({props.answer.helpfulness}) | Report
      </div>
    </div>
  )
};

export default Answers;