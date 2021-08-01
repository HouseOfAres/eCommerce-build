import React, { useState } from 'react';
import AnswerImg from './AnswerImg.jsx';
import moment from 'moment';

const Answers = (props) => {

  const [helpful, setHelpful] = useState(props.answer.helpfulness);
  const [report, setReport] = useState('Report');
  const [reported, setReported] = useState(false);

  const reportAnswer = () => {
    setReported(true);
    setReport('Reported')
  }

  const addHelpfulness = () => {
    const addOne = props.answer.helpfulness + 1;
    setHelpful(addOne);
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
        <div className="q_a_footer_item">Helpful? <div className="q_a_footer_item_yes" onClick={addHelpfulness}><u>Yes</u></div> ({helpful})</div>
        |
        <div onClick={reportAnswer} className="q_a_footer_item_report">
          <u>{report}</u>
        </div>

      </div>
    </div>
  )
};

export default Answers;