import React, { useState } from 'react';
import questions from '../../../mock-data/questions-data.js';
import Question from './Question.jsx';

const QuestionsList = () => {

  const questionData = questions.questions.results;
  const [questionList, setQuestionList] = useState(questionData);

  questionData.sort(function (a, b) {
    return b.question_helpfulness - a.question_helpfulness;
  });

  const fourQuestions = questionList.slice(0,4);
  console.log(fourQuestions);

  return (
    <div>
      {questionList.map((item) =>
        <Question item={item} key={item.question_id}/>
      )}
    </div>
  )
};

export default QuestionsList;