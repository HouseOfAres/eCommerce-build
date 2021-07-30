import React, { useState } from 'react';
import Question from './Question.jsx';

const QuestionsList = (props) => {

  const [toggleMoreQuestionsButton, setToggleMoreQuestionsButton] = useState(true);
  const questionData = props.questionList
    .sort(function (a, b) {
      return b.question_helpfulness - a.question_helpfulness;
    });
  // const [questionList, setQuestionList] = useState(questionData.slice(0, 4));
  const questionList = questionData.slice(0, 4);

  // More Questions Button
  const moreQuestionsHandler = () => {

    const [questionIndex, setQuestionIndex] = useState(4);
    const updateIndex = questionIndex + 2;
    setQuestionIndex(updateIndex)

    const updateQuestionList = questionList.slice(0, updateIndex);
    setQuestionList(updateQuestionList);

    if (updateIndex >= questionData.length) {
      setToggleMoreQuestionsButton(false);
    }
  }


  return (
    <div>
      {questionList.map((item) =>
        <Question item={item} key={item.question_id} />
      )}
      <div className="q_a_buttons">
        {toggleMoreQuestionsButton &&
          <input
            className="buttons"
            type='button'
            value="MORE ANSWERED QUESTIONS"
            onClick={() => { moreQuestionsHandler() }}
          />
        }
        <input
          className="buttons"
          type='button'
          value="ADD A QUESTION +"
        />
      </div>
    </div>
  )
};

export default QuestionsList;