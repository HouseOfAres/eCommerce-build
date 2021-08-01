import React, { useState } from 'react';
import '../ratings-review/Ratings.css';

const AnswerImg = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const imageClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img src={props.img} height="70px" width="auto" onClick={imageClickHandler.bind(this)}/>
      {isOpen &&
          <div className='popup-box'>
          <div className='imgPop'>
            <span className='close-icon' onClick={imageClickHandler}>x</span>
              <img
                src={props.img}
                height='500px'
                width='auto'
              ></img>
          </div>
        </div>

      }
    </div>
  )
};

export default AnswerImg;