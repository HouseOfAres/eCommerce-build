import React, { useState, useEffect, useContext } from 'react';
import access from '../../../config.js';
import axios from 'axios'

const AddQ = (props) => {

  const [productName, setProductName] = useState(props.currentProduct.name);
  const [questionText, setQuestionText] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [productId, setProductId] = useState(props.currentProduct.id);
  const [letterCount, setLetterCount] = useState(0);
  const [incompleteFields, setIncompleteFields] = useState(false);

  const addQuestionFormData = {
    body: questionText,
    name: nickName,
    email: email,
    product_id: 17072
  }

  const consoleLog = (e) => {
    e.preventDefault();
    console.log(addQuestionFormData)
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', addQuestionFormData, {
      headers: { 'Authorization': `${access.TOKEN}` }
    })
    .then((response) => {
      console.log('post received');
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
    props.handleClose();
  }

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value)
    setLetterCount(e.target.value.length)
  }

  const handleNickNameChange = (e) => {
    setNickName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  if (!incompleteFields) {
    if (email === '1') {
      setIncompleteFields(true);
    }
  }


  return (
    <div className='q_a_popup_box'>
      <div className='q_a_box'>
        <div className='q_a_close-icon' onClick={props.handleClose}>✖</div>
        <div className='pop_up_title'>Ask your question</div>
        <div className='pop_up_subtitle'>about {productName}</div>
        <hr className="form_hr"></hr>
        <div className="form_data">

          <form onSubmit={consoleLog}>

            <div className="form_item">
              <h3>* Your Question:</h3>
              <textarea type='text' onChange={handleQuestionTextChange} placeholder="Example: What is the airspeed velocity of an unladen swallow?" className="pop_up_input_form_textarea" rows="10" required />
              <div className="pop_up_letter_counter">
                Char count: {letterCount}/1000
              </div>
            </div>

            <div className="form_item">
              <h3>* What is your nickname?</h3>
              <input onChange={handleNickNameChange} placeholder="Example: jackson11!" className="pop_up_input_form" type='text' required />
              <div className="pop_up_email_text">
                For privacy reasons, do not use your full name or email address
              </div>
            </div>


            <div className="form_item">
              <h3>* Your email:</h3>
              <input onChange={handleEmailChange} placeholder="Example: email@address.com" className="pop_up_input_form" type='text' required />
              <div className="pop_up_email_text">
                For authentication reasons, you will not be emailed
              </div>
            </div>

            {incompleteFields &&
              <div className="pop_up_incomplete_text" style={{ color: "red" }}>You must fill in all required fields before submitting a question!</div>
            }
            <div className="form_button">
              <button type="submit" className="modal_button">SUBMIT QUESTION</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
};

export default AddQ;