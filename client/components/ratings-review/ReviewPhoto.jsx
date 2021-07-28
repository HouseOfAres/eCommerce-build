import React, { useState } from 'react';
import './Ratings.css';

const ReviewPhoto = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const imageClickHandler = () => {
    setIsOpen(!isOpen);
    console.log('clicked image dammit');
  };

  return (
    <div>
      <img src={props.photo.url} height="75" width="auto" onClick={imageClickHandler.bind(this)}/>
      {isOpen &&
           <img
              className="image"
              src={props.photo.url}
              onClick={imageClickHandler.bind(this)}
              alt="no image"
            />
      }
    </div>
  )
};

export default ReviewPhoto;