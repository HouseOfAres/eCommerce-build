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
  const [invalidQuestionLength, setInvalidQuestionLength] = useState(false);
  const [invalidNickNameLength, setInvalidNickNameLength] = useState(false);
  const [invalidNickNameChars, setInvalidNickNameChars] = useState(false);
  const [invalidEmailLength, setInvalidEmailLength] = useState(false);
  const [invalidEmailChars, setInvalidEmailChars] = useState(false);
  const [questionValid, setQuestionValid] = useState(false);
  const [nickNameValid, setNickNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState([]);
  let allValid = false;


  const validate = () => {
    let foundErrors = [];

    if (!questionValid) {
      foundErrors.push('Question body must be between 1 and 1000 characters');
    }
    if (!nickNameValid) {
      foundErrors.push('Username Required');
    }
    if (!emailValid === '') {
      foundErrors.push('Email Required');
    }
    console.log(foundErrors)
    return foundErrors;
  }

  // Submit question handler
  const submitNewQuestion = (e) => {

    e.preventDefault();
    console.log(errors)
    const errors = validate();
    console.log(errors)
    if (errors.length > 0) {
      allValid(false);
      setErrors(errors);
      return;
    }

    if (allValid) {

      const addQuestionFormData = {
        body: questionText,
        name: nickName,
        email: email,
        product_id: productId
      }

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

    } else {
      setShowErrors(true);
    }

  }

  // Question Validation
  const handleQuestionTextChange = (e) => {
    const QText = e.target.value;
    setQuestionText(QText)
    setLetterCount(QText.length)

    if (QText.length > 0 && QText.length < 1000) {
      setQuestionValid(true)
    } else {
      setQuestionValid(false)
    }
  }

  // Nickname Validation
  const handleNickNameChange = (e) => {
    const nickNameText = e.target.value;
    setNickName(nickNameText)

    if (nickNameText.length > 0 && nickNameText.length < 30) {
      setNickNameValid(true)
    } else {
      setNickNameValid(false)
    }
  }

  // Email Validation
  const handleEmailChange = (e) => {
    const emailText = e.target.value;
    setEmail(emailText)

    if (emailText.length > 0 && emailText.length < 60) {
      setEmailValid(true)
    } else {
      setEmailValid(false);
    }

    if (emailText.includes('@')) {
      setEmailValid(true)
    } else {
      setEmailValid(false);
    }

    if (emailText.includes('.') && emailText.indexOf('.') > emailText.indexOf('@')) {
      setEmailValid(true)
    } else {
      setEmailValid(false);
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

          <form onSubmit={submitNewQuestion}>

            <div className="form_item">
              <h3>* Your Question:</h3>
              <textarea type='text' onChange={handleQuestionTextChange} placeholder="Example: What is the airspeed velocity of an unladen swallow?" className="pop_up_input_form_textarea" rows="10" required />
              <div className="pop_up_letter_counter">
                Char count: {letterCount}/1000 {invalidQuestionLength && <span style={{ color: "red" }}>Max character limit reached! (1000)</span>}
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
                For authentication reasons, you will not be emailed {invalidEmailLength && <span style={{ color: "red" }}>Max character limit reached! (60)</span>}
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