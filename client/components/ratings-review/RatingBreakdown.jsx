import React, { useState } from 'react';
import Stars from '../shared-features/Stars.jsx';
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
        <h3>86% of reviews recommend this product</h3>

        <div className='starBar'>
          <p className='numberRating'>5 Stars</p>
            <div className='ratingBar'>
              <span className='rbars' style={{ "width": '20%'}}></span>
            </div>
        </div>

        <div className='starBar'>
          <p className='numberRating'>4 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": '30%'}}></span>
          </div>
        </div>
        <div className='starBar'>
          <p className='numberRating'>3 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": '80%'}}></span>
          </div>
        </div>
        <div className='starBar'>
         <p className='numberRating'>2 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": '20%'}}></span>
          </div>
        </div>
        <div className='starBar'>
         <p className='numberRating'>1 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": '10%'}}></span>
          </div>
        </div>

      </div>
    </div>
  )
};

export default RatingBreakdown;