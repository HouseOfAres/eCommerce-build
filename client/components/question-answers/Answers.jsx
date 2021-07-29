import React, { useState } from 'react';
import moment from 'moment';

const Answers = (props) => {
  return (
    <div className="answers">
      {props.index === 0 &&
        <>
          <h3 className="answerA">
            A:
          </h3>
          <div className="q_a_answer_first">
            {props.answer.body}
          </div>
        </>}
      {props.index !== 0 &&
        <div className="q_a_answer_text">
          {props.answer.body}
        </div>}
      {props.answer.photos.length > 0 &&
        <div className="q_a_thumbnail_img">{props.answer.photos.map(img => {
          return <img src={img}></img>
        })}</div>
      }

      <div className="q_a_footer">
        by {props.answer.answerer_name}, {moment(props.answer.date).format('ll')} | Helpful? <u>Yes</u> ({props.answer.helpfulness}) | <u>Report</u>
      </div>
    </div>
  )
};

export default Answers;