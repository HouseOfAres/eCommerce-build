import React, { useState } from 'react';
import review from '../../../mock-data/reviews-data.js';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = () => {
  const reviewData = review.review.results;
  const [reviewList, setReviewList] = useState(reviewData);

  return (
    <div>
      {reviewList.map((item) =>
        <ReviewTile item={item} key={item.review_id}/>
      )}
    </div>
  )
};

export default ReviewList;