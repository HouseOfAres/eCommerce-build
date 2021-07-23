import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import QuestionsAndAnswers from './components/question-answers/Q-A.jsx';
import Overview from './components/overview/Overview.jsx';
import Ratings from './components/ratings-review/Ratings.jsx';
import Related from './components/related/Related.jsx';
import '../public/styles.css';

// CHANGE NAME HERE
const App = () => {
//
// // Returns a stateful value, and a function to update it.
//   const [state, setState] = useState(initialState);

//
// // Accepts a function that contains imperative, possibly effectful code.

//
// // Accepts a context object (the value returned from React.

  return (
    <div>
      <Overview />
      <Ratings />
      <QuestionsAndAnswers />
      <Related />
    </div>
  )

}



ReactDOM.render(<App />, document.getElementById('app'));