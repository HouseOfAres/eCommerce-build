import React, { useState, useEffect, useContext } from 'react';
import access from '../../../config.js';

const AddQ = (props) => {

  const [productName, setProductName] = useState(props.productName);

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
              <h3>Review Body</h3>
              <textarea placeholder="Insert placeholder here..." className="pop_up_input_form_textarea" rows="10" />
            </div>

            <div className="form_item">
              <h3>Nickname</h3>
              <input placeholder="Insert placeholder here..." className="pop_up_input_form" type='text' />
            </div>

            <div className="form_item">
              <h3>Email</h3>
              <input placeholder="email@address.com" className="pop_up_input_form" type='text' />
            </div>
          </form>
        </div>
        <div className="pop_up_email_text">FOR AUTHENTICATION REASONS, YOU WILL NOT BE EMAILED</div>

        <div className="form_button">
          <button className="modal_button">SUBMIT QUESTION</button>
        </div>
      </div>
    </div>
  )
};

export default AddQ;