import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import QuestionsAndAnswers from './components/question-answers/Q-A.jsx';
import Overview from './components/overview/Overview.jsx';
import Ratings from './components/ratings-review/Ratings.jsx';
import Related from './components/related/Related.jsx';
import '../public/styles.css';


const App = () => {

  return (
    <div>
      <div className="nav">NAV BAR</div>
      <Overview />
      <div className="slogan">SLOGAN</div>
      <Related />
      <QuestionsAndAnswers />
      <Ratings />
    </div>
  )

}



ReactDOM.render(<App />, document.getElementById('app'));