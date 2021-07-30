import React, { useState, useEffect, useContext } from 'react';
import questions from '../../../mock-data/questions-data.js';
import { ProductContext } from '../../ProductContext.jsx';
import QuestionsList from './QuestionsList.jsx';
import SearchBar from './SearchBar.jsx';
import access from '../../../config.js';
import axios from 'axios';


// CHANGE NAME HERE
const QuestionsAndAnswers = () => {

  let currentProduct = useContext(ProductContext);
  let currentProductId = currentProduct.id;

  const [questionData, setQuestionData] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    // fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${currentProductId}&count=20`,
      fetch('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=17071&count=20',
      {
        headers: { 'Authorization': `${access.TOKEN}` }
      })
      .then(response => response.json())
      .then((data) => {
        setQuestionData(data.results);
        setQuestionList(data.results);
        setIsLoaded(true);
        console.log(isLoaded)
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }, [currentProductId]);


  return (
    <div className="component">
      <div className="q_a_component">
        <div className="component_title">QUESTIONS & ANSWERS</div>
        {isLoaded &&
          <SearchBar questionData={questionData} setQuestionList={setQuestionList} />
        }
        {isLoaded &&
          <QuestionsList questionList={questionList} test={setQuestionList}/>
        }
      </div>
    </div>
  )

}

// CHANGE EXPORT HERE
export default QuestionsAndAnswers;