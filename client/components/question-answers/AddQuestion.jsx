import React, { useState, useEffect, useContext } from 'react';
import access from '../../../config.js';

const AddQuestion = (props) => {

  const [productName, setProductName] = useState('');

  useEffect(() => {
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${props.id}`,
      {
        headers: { 'Authorization': `${access.TOKEN}` }
      })
      .then(response => response.json())
      .then((data) => {
        setProductName(data.name);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }, [productName]);

  return (
    <div className='q_a_popup_box'>
      <div className='q_a_box'>
        <div className='q_a_close-icon' onClick={props.handleClose}>✖</div>
        <div className='pop_up_title'>Write your review</div>
        <div className='pop_up_subtitle'>about {productName}</div>
        <hr className="form_hr"></hr>
        <div className="form_data">
          <div className="form_item">
            <h3>Overall Rating</h3>
            &#9734; &#9734; &#9734; &#9734; &#9734;
          </div>

          <div className="form_item">
            <h3>Do you recommend this product?</h3>
            <button>YES</button>
            <button>NO</button>
          </div>

          <div className="form_item">
            <h3>Characteristics</h3>
            <div className="form_characteristics_container">
              <div className="form_characteristics_text">
                Size<br></br>
                Width<br></br>
                Comfort<br></br>
                Quality<br></br>
                Length<br></br>
                Fit<br></br>
              </div>
              <div className="form_characteristics_radio">
                <div>
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </div>
                <div>
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </div>
                <div>
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </div>
                <div>
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </div>
                <div>
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </div>
                <div>
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </div>
              </div>
            </div>
          </div>


          <form>

            <div className="form_item">
              <h3>Review Summary</h3>
              <input placeholder="Insert placeholder here..." className="pop_up_input_form" type='text' />
            </div>

            <div className="form_item">
              <h3>Review Body</h3>
              <input placeholder="Insert placeholder here..." className="pop_up_input_form" type='textarea' />
            </div>

            <div className="form_item">
              <h3>Upload Photos (5 Max.)</h3>
              <input type='submit' value='UPLOAD' />
            </div>

            <div className="form_item">
              <h3>Nickname</h3>
              <input placeholder="Insert placeholder here..." className="pop_up_input_form" type='text' />
            </div>

            <div className="form_item">
              <h3>Email</h3>
              <input placeholder="Insert placeholder here..." className="pop_up_input_form" type='text' />
            </div>

          </form>

          <div className="form_button">
            <button className="modal_button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddQuestion;