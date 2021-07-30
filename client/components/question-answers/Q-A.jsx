import React, { useState, useEffect, useContext } from 'react';
import questions from '../../../mock-data/questions-data.js';
import { ProductContext } from '../../ProductContext.jsx';
import QuestionsList from './QuestionsList.jsx';
import SearchBar from './SearchBar.jsx';
import QaButtons from './Q-A-Buttons.jsx';
import access from '../../../config.js';
import axios from 'axios';


// CHANGE NAME HERE
const QuestionsAndAnswers = () => {

  let currentProduct = useContext(ProductContext);
  let currentProductId = currentProduct.id;

  const [questionData, setQuestionData] = useState([]);
  const [questionList, setQuestionList] = useState([]);


  useEffect(() => {
    // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${currentProductId}&count=20`,
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=17074&count=20`,
    {
        headers: { 'Authorization': `${access.TOKEN}` }
      })
      .then((response) => {
        setQuestionData(response.data.results);
        setQuestionList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentProductId]);


  return (
    <div className="component">
      <div className="q_a_component">
        <div className="component_title">QUESTIONS & ANSWERS</div>
        <SearchBar questionData={questionData} setQuestionList={setQuestionList}/>
        <QuestionsList questionList={questionList} />
      </div>
    </div>
  )

}

// CHANGE EXPORT HERE
export default QuestionsAndAnswers;