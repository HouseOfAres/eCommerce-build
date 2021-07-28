import React, { useState } from 'react';
import Stars from './Stars.jsx'
import './Ratings.css';


const RatingBreakdown = (props) => {

  const calcAvgRating = (array) => {
    let total = 0;
    array.forEach((item) => total += item.rating);
    const average = total / array.length;
    return Math.round(average * 10) / 10;
  };

  return (
    <div>
      <div className='mainRating'>
        <h3>RATINGS &amp; REVIEWS</h3>
        <h1>{calcAvgRating(props.reviewData)}</h1>
        <Stars rating={calcAvgRating(props.reviewData)}/>
        <h3>100% of reviews recommend this product</h3>

        <div className='starBar'>
          <h4>5 Stars</h4>
        </div>
        <div className='starBar'>
          <h4>4 Stars</h4>
        </div>
        <div className='starBar'>
          <h4>3 Stars</h4>
        </div>
        <div className='starBar'>
          <h4>2 Stars</h4>
        </div>
        <div className='starBar'>
          <h4>1 Stars</h4>
        </div>

      </div>
    </div>
  )
};

export default RatingBreakdown;