import React, { useState, useEffect } from 'react';
import questions from '../../../mock-data/questions-data.js';
import QuestionsList from './QuestionsList.jsx';
import SearchBar from './SearchBar.jsx';
import QaButtons from './Q-A-Buttons.jsx';

// import React { useState } from 'react;'

// CHANGE NAME HERE
const App = () => {

  const questionData = questions.questions.results;
  const [questionList, setQuestionList] = useState(questionData.slice(0, 4));

  return (
    <div className="component">
      <div className="q_a_component">
        <div className="component_title">QUESTIONS & ANSWERS</div>
        <SearchBar />
        <QuestionsList questionList={questionList} />
        <QaButtons questionData={questionData} questionList={questionList} setQuestionList={setQuestionList}/>
      </div>
    </div>
  )

}

// CHANGE EXPORT HERE
export default App;