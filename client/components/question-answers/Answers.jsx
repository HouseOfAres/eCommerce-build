import React, { useState } from 'react';
import AnswerImg from './AnswerImg.jsx';
import access from '../../../config.js';
import axios from 'axios';
import moment from 'moment';

const Answers = (props) => {

  const [report, setReport] = useState('Report');
  const [reported, setReported] = useState(false);
  const [answerHelpfulness, setAnswerHelpfulness] = useState(props.answer.helpfulness);
  const [firstVote, setFirstVote] = useState(true)
  let answerId = props.answer.id;


  // Update Answer Helpful Number
  let newAnswerObj = {
    id: answerHelpfulness,
  }

  const addHelpfulness = () => {
    if (firstVote) {
      const addOne = props.answer.helpfulness + 1;
      setAnswerHelpfulness(addOne);
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answerId}/helpful`, newAnswerObj, {
        headers: { 'Authorization': `${access.TOKEN}` }
      });
      setFirstVote(false);
    } else {
      console.log('You already voted!')
    }
  }


  const reportAnswer = () => {
    setReported(true);
    setReport('Reported')
  }


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
        <div className="q_a_thumbnail_img">{props.answer.photos.map((img, i) => {
          return <AnswerImg img={img} key={i} />
        })}</div>
      }

      <div className="q_a_footer">
        <div className="q_a_footer_item_first">
          by {props.answer.answerer_name},
        </div>
        <div className="q_a_footer_item">
          {moment(props.answer.date).format('ll')}
        </div>
        |
        <div className="q_a_footer_item">Helpful? <div className="q_a_footer_item_yes" onClick={addHelpfulness}><u>Yes</u></div> ({answerHelpfulness})</div>
        |
        <div onClick={reportAnswer} className="q_a_footer_item_report">
          <u>{report}</u>
        </div>

      </div>
    </div>
  )
};

export default Answers;