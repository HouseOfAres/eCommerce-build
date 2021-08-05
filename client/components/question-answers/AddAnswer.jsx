import React, { useState, useEffect, useContext } from 'react';
import access from '../../../config.js';
import axios from 'axios'

const AddAnswer = (props) => {

  const [productName, setProductName] = useState(props.productName);
  const [questionBody, setQuestionBody] = useState(props.questionBody);
  const [answerText, setAnswerText] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState([]);
  const [urlArray, setUrlArray] = useState([]);
  const [questionId, setQuestionId] = useState(props.questionId);
  const [letterCount, setLetterCount] = useState(0);
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState([]);
  let allValid = false;

  const testImg = ['https://images.theconversation.com/files/405990/original/file-20210611-13-pcdwbd.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop']


  const validate = () => {
    let foundErrors = [];

    if (answerText === '') {
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


  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(urlArray)
    const errors = validate();

    if (errors.length > 0) {
      console.log('hi')
      allValid = false;
      setErrors(errors);
      return;
    }else {
      allValid = true;
    }

    if (allValid) {

      const addQuestionFormData = {
        body: answerText,
        name: nickName,
        email: email,
        photos: testImg
      }

      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/answers`, addQuestionFormData, {
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

  const handleAnswerTextChange = (e) => {
    const answerText = e.target.value;
    setAnswerText(answerText)
    setLetterCount(answerText.length)
  }

  const handleNickNameChange = (e) => {
    const nickNameText = e.target.value;
    setNickName(nickNameText)
  }

  const handleEmailChange = (e) => {
    const emailText = e.target.value;
    setEmail(emailText)
  }

  const fileChangedHandler = (e) => {
    e.preventDefault();
    let file_reader = new FileReader();
    let file = e.target.files[0];
    console.log(file)

    file_reader.onload = () => {
      setSelectedFile([...selectedFile, {
        uploaded_file: file_reader.result,
        photoURL: URL.createObjectURL(file)
      }
      ])
      setUrlArray([...urlArray, URL.createObjectURL(file)]);
    }
    file_reader.readAsDataURL(file);

    if (selectedFile.length === 5) {
      setToggleUpload(false);
    }
  }

  const uploadHandler = (e) => {
    e.preventDefault();
    console.log('You just uploaded: ', selectedFile)
  }


  return (
    <div className='q_a_popup_box'>
      <div className='q_a_box'>
        <div className='q_a_close-icon' onClick={props.handleClose}>✖</div>
        <div className='pop_up_title'>Submit your Answer</div>
        <div className='pop_up_subtitle'>{productName} : {questionBody}</div>
        <hr className="form_hr"></hr>
        <div className="form_data">

          <form onSubmit={handleFormSubmit}>

            <div className="form_item">
              <h3>* Your Answer:</h3>
              <textarea
                type="text"
                onChange={handleAnswerTextChange}
                placeholder="Example: Well, you have to know these things when you're a king, you know..."
                className="pop_up_input_form_textarea"
                rows="10"
                maxLength={1000}
                required
              />
            </div>

            <div className="form_item">
              <h3>* What is your nickname?</h3>
              <input
                onChange={handleNickNameChange}
                placeholder="Example: jack543!"
                className="pop_up_input_form"
                type='text'
                required
              />
              <div className="pop_up_email_text">
                For privacy reasons, do not use your full name or email address
              </div>
            </div>

            <div className="form_item">
              <h3>* Your email:</h3>
              <input
                onChange={handleEmailChange}
                placeholder="Example: jack@email.com"
                className="pop_up_input_form"
                type='text'
                required
              />
              <div className="pop_up_email_text">
                For authentication reasons, you will not be emailed
              </div>
            </div>

            {/* <div className="form_item">
              <h3>Upload your photos:</h3>
              <input
                type="file"
                className="pop_up_img_loader"
              />
              <div className="add_answer_img_thumbnails">
                <div className="img_placeholder">Image 1</div>
                <div className="img_placeholder">Image 2</div>
                <div className="img_placeholder">Image 3</div>
                <div className="img_placeholder">Image 4</div>
                <div className="img_placeholder">Image 5</div>
              </div>
            </div> */}

            <div className="form_item">
              <h3>Upload Photos (5 Max.)</h3>
            </div>
            <div className='uploadPhotos'>
              <input type='file' multiple accept='.jpeg, .png, .pdf' onChange={fileChangedHandler} />
            </div>
            <div className='previewPhotos'>
              {
                selectedFile.map(photo => (
                  <img src={photo.photoURL} alt='...' height="60px" />
                ))
              }
            </div>
            <button onClick={uploadHandler}>Upload</button>

            <div className='errors'>
              {errors.map(error => (
                <li key={error}>Error: {error}</li>
              ))}
            </div>
            <div className="form_button">
              <button className="modal_button">SUBMIT ANSWER</button>
            </div>

          </form>

        </div>
      </div>
    </div >
  )
};

export default AddAnswer;