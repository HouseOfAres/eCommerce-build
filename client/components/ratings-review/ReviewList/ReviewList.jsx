import ReviewTile from './ReviewTile.jsx';
import React, { useState } from 'react';


const ReviewList = (props) => {

  return (
      <div>
        {props.reviewList.map((item, i) =>
          <>
            <ReviewTile key={i} item={item} handleClose={props.showModalHandler} />
            <hr className="review_hr"></hr>
          </>
        )}
      </div>
  )
};

export default ReviewList;