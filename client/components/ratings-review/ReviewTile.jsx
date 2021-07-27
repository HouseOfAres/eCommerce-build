import React, { useState } from 'react';
import ReviewPhoto from './ReviewPhoto.jsx';
import './ReviewTile.css';
const moment = require('moment');


const ReviewTile = (props) => {
  const convertedDate = moment(`${props.item.date}`).format("MMMM Do YYYY");
  const reviewPhotos = props.item.photos;
  const responseAvailable = (props.item.response !== null) && (props.item.response !== '');
  // if (props.item.response !== null || props.item.response !== '') {
  //   return <div className='reviewResponse' >{responseAvailable && props.item.response}</div>
  // }
  const reviewResponseStyle = {
    backgroundColor: '#DDDDCB',
    padding: '15px 30px'
  }

  return (
    <div className='reviewTileComponent'>

      <div className='reviewRating'>Rating Stars: {props.item.rating}</div>

      <div className='reviewSummary' style={{ fontWeight: 'bold' }}>{props.item.summary}</div>

      <div className='reviewBody'>{props.item.body}</div>

      <div className='reviewerNameDate'>{props.item.reviewer_name}, {convertedDate}</div>

      <div className='responseDiv'>{responseAvailable &&
        <div className='reviewResponse' style={reviewResponseStyle}>Response: {props.item.response}</div>
        }
       </div>

      <div className='reviewPhotos'>
        {reviewPhotos.length > 0 &&
          (reviewPhotos.map(photo => {
            return <ReviewPhoto photo={photo} key={photo.id} onClick={() => props.largeImageHandler(photo.url)} />
          }))
        }
      </div>

      <div className='reviewHelpfulness'>Helpful? {props.item.helpfulness}</div>

    </div>
  )
};

export default ReviewTile;