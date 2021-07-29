import React, { useState, useEffect, useContext } from 'react';
// import { useContext } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import AddReview from './AddReview.jsx';
import productReviews from '../../../mock-data/reviews-data.js';
import productData from '../../../mock-data/products-data.js';
import './Ratings.css';

import { ProductContext } from '../../ProductContext.jsx';

const Ratings = () => {
  // UseContext to get product ID
  const currentProduct = useContext(ProductContext);
  const productId = currentProduct.id;


  const [product, setProductID] = useState(productReviews.review);

  const reviewData = productReviews.review.results;
  const [toggleMoreReviewButton, setToggleMoreReviewButton] = useState(true);
  const [reviewList, setReviewList] = useState([reviewData[0], reviewData[1]]);
  const [reviewIndex, setReviewIndex] = useState(2);
  const [showModal, setShowModal] = useState(false);
  //Create API call for the product reviews

  // Deal with varying review quantities
  if (reviewData.length === 0) {
    setToggleMoreReviewButton(false);
  }

  // More Reviews Button
  const moreReviewsHandler = () => {

    const updateIndex = reviewIndex + 2;
    setReviewIndex(updateIndex)

    const updateReviewList = reviewData.slice(0, updateIndex);
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
                    onClick={() => {moreReviewsHandler()}} />
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

