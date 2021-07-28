import React, { useState, useEffect } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import AddReview from './AddReview.jsx';
import productReviews from '../../../mock-data/reviews-data.js';
import productData from '../../../mock-data/products-data.js';
import './Ratings.css';

const Ratings = () => {
  const reviewData = productReviews.review.results;

  const [toggleMoreReviewButton, setToggleMoreReviewButton] = useState(true);
  const [reviewList, setReviewList] = useState([reviewData[0], reviewData[1]]);
  const [reviewIndex, setReviewIndex] = useState(2);
  const [product, setProductID] = useState(productReviews.review);
  const [showModal, setShowModal] = useState(false);

  // Deal with varying review quantities
  if (reviewData.length === 0) {
    setToggleMoreReviewButton(false);
  }


  // More Reviews Button
  const moreReviewsHandler = (e) => {
    e.preventDefault();
    const updateIndex = reviewIndex + 2;
    setReviewIndex(updateIndex)

    const updateReviewList = reviewData.slice(0, reviewIndex);
    setReviewList(updateReviewList);

    if (reviewData.length === reviewIndex) {
      setToggleMoreReviewButton(false);
    }
  }

  // Add a Review Modal
  const showModalHandler = (e) => {
    setShowModal(!showModal);
  }

  return (
    <div className='test'>
      <div className='component'>
        <div className='reviewsRatingsContainer'>

                <div className='reviewList'>
                  <div className='reviewTiles'>
                    <ReviewList reviewList={reviewList} handleClose={showModalHandler} />
                  </div>
                </div>
                {toggleMoreReviewButton &&
                  <input
                    className='moreButton'
                    type='submit'
                    value='MORE REVIEWS'
                    onClick={moreReviewsHandler} />
                }

                <div className='ratingComponent'>
                  <RatingBreakdown reviewData={reviewData} />
                </div>

                <div className='addingReviewComponent'>
                  {showModal &&
                    <AddReview handleClose={showModalHandler}/>
                  }
                </div>

                <input
                  className='addButton'
                  type='button'
                  value='ADD A REVIEW +'
                  onClick={showModalHandler}
                 />

        </div>
      </div>
    </div>

  )

}

export default Ratings;





  // // Returns a stateful value, and a function to update it.
  //   const [state, setState] = useState(initialState);
  //   setState(newState);
  // // Accepts a function that contains imperative, possibly effectful code.
  //   useEffect(fn);
  // // Accepts a context object (the value returned from React.
  //   const value = useContext(MyContext);