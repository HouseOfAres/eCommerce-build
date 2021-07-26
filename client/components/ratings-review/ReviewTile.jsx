import React, { useState } from 'react';

const ReviewTile = (props) => {

  return (
    <div className='reviewTileComponent'>
      <div className='reviewRating'>Rating Stars: {props.item.rating}</div>
      <div className='reviewDate'>{props.item.date}</div>
      <div className='reviewSummary' style={{ fontWeight: 'bold' }}>{props.item.summary}</div>
      <div className='reviewBody'>{props.item.body}</div>
      <div className='reviewerName'>{props.item.reviewer_name}</div>
      <div className='reviewHelpfulness'>Helpful? {props.item.helpfulness}</div>
    </div>
  )
};

export default ReviewTile;