import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import QuestionsAndAnswers from './components/question-answers/Q-A.jsx';
import Overview from './components/overview/Overview.jsx';
import Ratings from './components/ratings-review/Ratings.jsx';
import Related from './components/related/Related.jsx';
import Slogan from './nav-slogan/Slogan.jsx';
import '../public/styles.css';

import { ProductContext } from './ProductContext.jsx';


const App = () => {

  return (
    <div>
      <ProductContext.Provider value={17070}>

        <div className="nav">NAV BAR</div>
        <Overview />
        <Slogan />
        <Related />
        <QuestionsAndAnswers />
        <Ratings />

      </ProductContext.Provider>
    </div>
  )

}



ReactDOM.render(<App />, document.getElementById('app'));