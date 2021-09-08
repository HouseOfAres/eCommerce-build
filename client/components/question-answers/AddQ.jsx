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
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState([]);
  let allValid = false;


  const validate = () => {
    let foundErrors = [];

    if (questionText === '') {
      foundErrors.push('Question body must be between 1 and 1000 characters');
    }
    if (nickName === '') {
      foundErrors.push('Username Required');
    }
    if (email === '') {
      foundErrors.push('Email Required');
    }
    if (!email.includes('@')) {
      foundErrors.push('Email Requires \'@\'');
    }
    if (!(email.includes('.'))) {
      foundErrors.push('Email Requires an end (.com, .net, .org, etc.)');
    }

    return foundErrors;
  }

  // Submit question handler
  const submitNewQuestion = (e) => {

    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
      allValid = false;
      setErrors(errors);
      return;
    } else {
      allValid = true;
    }

    if (allValid) {

      const addQuestionFormData = {
        body: questionText,
        name: nickName,
        email: email,
        product_id: productId
      }

      axios.post('/qa/questions', addQuestionFormData);

      props.handleClose();

    } else {
      setShowErrors(true);
    }

  }

  // Question Validation
  const handleQuestionTextChange = (e) => {
    const QText = e.target.value;
    setQuestionText(QText)
    setLetterCount(QText.length)
  }

  // Nickname Validation
  const handleNickNameChange = (e) => {
    const nickNameText = e.target.value;
    setNickName(nickNameText)
  }

  // Email Validation
  const handleEmailChange = (e) => {
    const emailText = e.target.value;
    setEmail(emailText)
  }


  return (
    <div className='q_a_popup_box'>
      <div className='q_a_box'>
        <div className='q_a_close-icon' onClick={props.handleClose}>✖</div>
        <div className='pop_up_title'>Ask your question</div>
        <div className='pop_up_subtitle'>about {productName}</div>
        <hr className="form_hr"></hr>
        <div className="form_data">

          <form onSubmit={submitNewQuestion}>

            <div className="form_item">
              <h3>* Your Question:</h3>
              <textarea type='text' onChange={handleQuestionTextChange} placeholder="Example: What is the airspeed velocity of an unladen swallow?" className="pop_up_input_form_textarea" rows="10" required />
              <div className="pop_up_letter_counter">
                Char count: {letterCount}/1000
              </div>
            </div>

            <div className="form_item">
              <h3>* What is your nickname?</h3>
              <input onChange={handleNickNameChange} placeholder="Example: jackson11!" className="pop_up_input_form" type='text' maxLength={30} required />
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

            <div className='errors'>
              {errors.map(error => (
                <li key={error}>Error: {error}</li>
              ))}
            </div>
            <div className="form_button">
              <input type="submit" value="SUBMIT QUESTION" className="modal_button" />
            </div>

          </form>

        </div>
      </div>
    </div>
  )
};

export default AddQ;