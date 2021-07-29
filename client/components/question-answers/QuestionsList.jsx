import React, { useState } from 'react';
import Question from './Question.jsx';

const QuestionsList = (props) => {

  props.questionList.sort(function (a, b) {
    return b.question_helpfulness - a.question_helpfulness;
  });

  return (
    <div>
      {props.questionList.map((item) =>
        <Question item={item} key={item.question_id} />
      )}
    </div>
  )
};

export default QuestionsList;