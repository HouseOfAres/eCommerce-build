import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';


const ReviewList = (props) => {

  return (
    <div>
      <div>
        {props.reviewList.map((item) =>
          <ReviewTile item={item} key={item.review_id}/>
          )}
      </div>
    </div>
  )
};

export default ReviewList;