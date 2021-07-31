import React, { useState, useEffect, useContext } from 'react';

const AddQ = (props) => {

  const [productName, setProductName] = useState(props.currentProduct.name);


  return (
    <div className='q_a_popup_box'>
      <div className='q_a_box'>
        <div className='q_a_close-icon' onClick={props.handleClose}>✖</div>
        <div className='pop_up_title'>Ask your question</div>
        <div className='pop_up_subtitle'>about {productName}</div>
        <hr className="form_hr"></hr>
        <div className="form_data">

          <form>
            <div className="form_item">
              <h3>* Your Question:</h3>
              <textarea placeholder="Example: What is the airspeed of an unladen swallow?" className="pop_up_input_form_textarea" rows="10" />
            </div>

            <div className="form_item">
              <h3>* What is your nickname?</h3>
              <input placeholder="Example: jackson11!" className="pop_up_input_form" type='text' required />
              <div className="pop_up_email_text">
                For privacy reasons, do not use your full name or email address
              </div>
            </div>


            <div className="form_item">
              <h3>* Your email:</h3>
              <input placeholder="Example: email@address.com" className="pop_up_input_form" type='text' required />
              <div className="pop_up_email_text">
                For authentication reasons, you will not be emailed
              </div>
            </div>

          </form>
        </div>


        <div className="form_button">
          <button className="modal_button">SUBMIT QUESTION</button>
        </div>
      </div>
    </div>
  )
};

export default AddQ;