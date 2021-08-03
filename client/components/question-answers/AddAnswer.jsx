import React, { useState, useEffect, useContext } from 'react';

const AddAnswer = (props) => {

  const [productName, setProductName] = useState(props.productName);
  const [questionBody, setQuestionBody] = useState(props.questionBody);

  const [answerText, setAnswerText] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [questionId, setQuestionId] = useState(props.questionId);
  const [letterCount, setLetterCount] = useState(0);
  const [incompleteFields, setIncompleteFields] = useState(false);


  const addQuestionFormData = {
    body: questionText,
    name: nickName,
    email: email,
    photos: photos
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

  return (
    <div className='q_a_popup_box'>
      <div className='q_a_box'>
        <div className='q_a_close-icon' onClick={props.handleClose}>✖</div>
        <div className='pop_up_title'>Submit your Answer</div>
        <div className='pop_up_subtitle'>{productName} : {questionBody}</div>
        <hr className="form_hr"></hr>
        <div className="form_data">

          <form>

            <div className="form_item">
              <h3>* Your Answer:</h3>
              <textarea type="text" placeholder="Example: Well, you have to know these things when you're a king, you know..." className="pop_up_input_form_textarea" rows="10" required />
            </div>

            <div className="form_item">
              <h3>* What is your nickname?</h3>
              <input placeholder="Example: jack543!" className="pop_up_input_form" type='text' required />
              <div className="pop_up_email_text">
                For privacy reasons, do not use your full name or email address
              </div>
            </div>

            <div className="form_item">
              <h3>* Your email:</h3>
              <input placeholder="Example: jack@email.com" className="pop_up_input_form" type='text' required />
              <div className="pop_up_email_text">
                For authentication reasons, you will not be emailed
              </div>
            </div>

            <div className="form_item">
              <h3>Upload your photos:</h3>
              <input type="file" className="pop_up_img_loader" />
              <div className="add_answer_img_thumbnails">
                <div className="img_placeholder">Image 1</div>
                <div className="img_placeholder">Image 2</div>
                <div className="img_placeholder">Image 3</div>
                <div className="img_placeholder">Image 4</div>
                <div className="img_placeholder">Image 5</div>
              </div>
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