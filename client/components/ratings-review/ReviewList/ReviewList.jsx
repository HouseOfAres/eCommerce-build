import ReviewTile from './ReviewTile.jsx';
import React, { useState } from 'react';


const ReviewList = (props) => {

  return (
    <div>
      <div>
        {props.reviewList.map((item) =>
          <>
            <ReviewTile item={item} key={item.review_id} handleClose={props.showModalHandler} />
            <hr className="review_hr"></hr>
          </>
        )}
      </div>
    </div>
  )
};

export default ReviewList;