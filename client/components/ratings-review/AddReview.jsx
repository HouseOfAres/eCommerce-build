import React, { useState } from 'react';
import './AddReview.css';

const AddReview = (props) => {

  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={props.handleClose}>X</span>
        <h3>Write your review</h3>
        <h4>about 'INSERT PRODUCT NAME'</h4>

        <div>Overall Rating
          <p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
        </div>

        <div>Do you recommend this product?
          <button>YES</button>
          <button>NO</button>

        </div>
        <div>Characteristics
          <div>  Size</div>
          <div>  Width</div>
          <div>  Comfort</div>
          <div>  Quality</div>
          <div>  Length</div>
          <div>  Fit</div>
        </div>

        <div>Review Summary
          <form>
            <input type='text' value='Max 60 Characters' />
          </form>
        </div>

        <div>Review Body</div>
          <form>
            <input type='text' value='Must be 50-1000 Characters' />
          </form>

        <div>Upload Photos (5 Max.)
          <input type='submit' value='UPLOAD'/>
        </div>

        <div>Nickname
          <form>
            <input type='text' value='Nickname' />
          </form>
        </div>
        <div>Email</div>
           <form>
            <input type='text' value='Email' />
          </form>

      </div>
    </div>
  )
};

export default AddReview;