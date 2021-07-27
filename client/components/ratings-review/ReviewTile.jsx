import React, { useState } from 'react';
import './ReviewTile.css';
const moment = require('moment');


const ReviewTile = (props) => {
  const convertedDate = moment(`${props.item.date}`).format("MMMM Do YYYY");

  return (
    <div className='reviewTileComponent'>
      <div className='reviewRating'>Rating Stars: {props.item.rating}</div>
      <div className='reviewSummary' style={{ fontWeight: 'bold' }}>{props.item.summary}</div>
      <div className='reviewBody'>{props.item.body}</div>
      <div className='reviewerNameDate'>{props.item.reviewer_name}, {convertedDate}</div>
      <div className='reviewHelpfulness'>Helpful? {props.item.helpfulness}</div>
    </div>
  )
};

export default ReviewTile;