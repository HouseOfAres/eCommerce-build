import ReviewTile from './ReviewTile.jsx';
import React, { useState } from 'react';


const ReviewList = (props) => {

  return (
      <div>
        {props.reviewList.map((item, i) =>
          <div key={i}>
            <ReviewTile key={item.review_id} item={item} handleClose={props.showModalHandler} productId={props.productId}/>
            <hr className="review_hr"></hr>
          </div>
        )}
      </div>
  )
};

export default ReviewList;