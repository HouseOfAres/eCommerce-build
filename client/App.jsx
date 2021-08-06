import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './nav-slogan/NavBar.jsx';
import QuestionsAndAnswers from './components/question-answers/Q-A.jsx';
import Overview from './components/overview/Overview.jsx';
import Ratings from './components/ratings-review/Ratings.jsx';
import Related from './components/related/Related.jsx';
import Slogan from './nav-slogan/Slogan.jsx';
import '../public/styles.css';
import access from '../config.js';

import { ProductContext } from './ProductContext.jsx';
import axios from 'axios'

const App = () => {

  const [productData, setProductData] = useState({});

  useEffect(() => {

    fetch('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17067', {
      headers: { 'Authorization': `${access.TOKEN}` }
    })
      .then(response => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <ProductContext.Provider value={productData}>

        <div id="toTheTop"><NavigationBar /></div>
        <Overview />
          <div id="Related-Items"><Slogan /></div>
        <Related />
        {/* <a
          id="Questions&Answers"> */}
          <a
            href="#toTheTop"
            className="remove_underline" >
            <div id="Questions&Answers" className="backToTop">Back to top <i class="fas fa-caret-up"></i></div>
          </a>
        {/* </a> */}
        <QuestionsAndAnswers />
          <a
            href="#toTheTop"
            className="remove_underline" >
            <div id="Ratings&Reviews" className="backToTop">Back to top <i class="fas fa-caret-up"></i></div>
          </a>
        <Ratings />
        <a
          href="#toTheTop"
          className="remove_underline" >
          <div className="backToTop">Back to top <i class="fas fa-caret-up"></i></div>
        </a>

      </ProductContext.Provider>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('app'));