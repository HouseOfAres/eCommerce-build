import Stars from '../../shared-features/Stars.jsx';
import ReviewPhoto from './ReviewPhoto.jsx';
import React, { useState } from 'react';
import './ReviewTile.css';
import axios from 'axios';


const moment = require('moment');
const ReviewTile = (props) => {
  const convertedDate = moment(`${props.item.date}`).format("MMMM Do YYYY");
  const reviewPhotos = props.item.photos;
  const responseAvailable = (props.item.response !== null) && (props.item.response !== '');
  const [recommended, setRecommend] = useState(false);
  const reviewResponseStyle = {
    backgroundColor: '#DDDDCB',
    padding: '15px 30px'
  }

  const [reviewHelpfulness, setReviewHelpfulness] = useState(props.item.helpfulness);
  const [firstVote, setFirstVote] = useState(true)
  let reviewId = props.item.review_id;


  const addHelpfulness = () => {
    if (firstVote) {
      const addOne = reviewHelpfulness + 1;
      setReviewHelpfulness(addOne);

      let newReviewObj = {
        review_id: reviewHelpfulness,
      }

      axios.put(`reviews/${reviewId}`, newReviewObj)
      setFirstVote(false);
    } else {
      console.log('You already voted!')
    }
  }

  return (
    <div className='reviewTileComponent'>

      <div className='reviewRating'>
        <Stars rating={props.item.rating} />
        </div>

      <div className='reviewSummary' style={{ fontWeight: 'bold' }}>{props.item.summary}</div>

      <div className='reviewBody'>{props.item.body}</div>

      <div className='reviewerNameDate'>
      <i className="fas fa-check-circle"></i> {props.item.reviewer_name}, {convertedDate}</div>

      {props.item.recommend && <div className='recommendCheck'>✔ I recommend this product</div>}

      <div className='responseDiv'>{responseAvailable &&
        <div className='reviewResponse' style={reviewResponseStyle}>Response: {props.item.response}</div>
        }
       </div>

      <div className='reviewPhotos'>
        {reviewPhotos.length > 0 &&
          (reviewPhotos.map(photo => {
            return <ReviewPhoto photo={photo} key={photo.id} handleClose={props.showModalHandler}/>
          }))
        }
      </div>

      <div className='reviewHelpfulness'>Helpful? {firstVote && <u className='clickHelpful' onClick={addHelpfulness}>Yes</u>} ({reviewHelpfulness})</div>
    </div>
  )
};

export default ReviewTile;