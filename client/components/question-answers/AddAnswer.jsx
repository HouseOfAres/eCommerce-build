import React, { useState, useEffect, useContext } from 'react';

const AddAnswer = (props) => {

  const [productName, setProductName] = useState(props.productName);
  const [questionBody, setQuestionBody] = useState(props.questionBody);
  const [forms, setForms] = useState(document.forms);
  console.log(forms[1])
  let form = document.forms;
  console.log(form)
  console.log(form.length)
  console.log(form[1])

  return (
    <div className='q_a_popup_box'>
      <div className='q_a_box'>
        <div className='q_a_close-icon' onClick={props.handleClose}>✖</div>
        <div className='pop_up_title'>Submit your Answer</div>
        <div className='pop_up_subtitle'>{productName} : {questionBody}</div>
        <hr className="form_hr"></hr>
        <div className="form_data">

          <form className="test">
            <div className="form_item">
              <h3>* Your Answer:</h3>
              <textarea placeholder="Example: Well, you have to know these things when you're a king, you know..." className="pop_up_input_form_textarea" rows="10" required />
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

          </form>
        </div>


        <div className="form_button">
          <button className="modal_button">SUBMIT ANSWER</button>
        </div>
      </div>
    </div >
  )
};

export default AddAnswer;