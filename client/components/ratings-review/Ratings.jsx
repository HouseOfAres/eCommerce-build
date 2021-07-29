import React, { useState, useEffect, useContext } from 'react';
import productReviews from '../../../mock-data/reviews-data.js';
import productData from '../../../mock-data/products-data.js';
import { ProductContext } from '../../ProductContext.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import AddReview from './AddReview.jsx';
import access from '../../../config.js';
import axios from 'axios'
import './Ratings.css';


const Ratings = () => {
  // UseContext to get product ID
  const currentProduct = useContext(ProductContext);
  const productId = currentProduct.id;


  const [incomingReviews, setProductReviews] = useState({});
  const reviewData = productReviews.review.results;
  const [toggleMoreReviewButton, setToggleMoreReviewButton] = useState(true);
  const [reviewList, setReviewList] = useState([reviewData[0], reviewData[1]]);
  const [reviewIndex, setReviewIndex] = useState(2);
  const [showModal, setShowModal] = useState(false);

  //Create API call for the product reviews
  useEffect(()=> {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=17067', {headers: {'Authorization': `${access.TOKEN}`}
          })
          .then((response) => {
            setProductReviews(response.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
  },{});
  console.log(incomingReviews)

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

