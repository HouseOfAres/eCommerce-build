import React, { useState } from 'react';
import './Ratings.css';

const ReviewPhoto = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const imageClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img src={props.photo.url} height='75' width='auto' onClick={imageClickHandler.bind(this)}/>
      {isOpen &&
          <div className='popup-box'>
          <div className='box'>
            <span className='close-icon' onClick={imageClickHandler}>x</span>
              <img
                className='image'
                src={props.photo.url}
                height='500px'
                width='auto'
                class='center'
              ></img>
          </div>
        </div>

      }
    </div>
  )
};

export default ReviewPhoto;