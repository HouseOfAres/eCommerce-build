import React, { useState } from 'react';
import './AddReview.css';

const AddReview = (props) => {

  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={props.handleClose}>X</span>
        <h3>HOLY SHIT A MODAL IN THE WILD</h3>

      </div>
    </div>
  )
};

export default AddReview;