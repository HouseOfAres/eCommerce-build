import React, { useState, useEffect, useContext } from 'react';
import productReviews from '../../../mock-data/reviews-data.js';
import productData from '../../../mock-data/products-data.js';
import { ProductContext } from '../../ProductContext.jsx';
import AddReview from './AddReviewForm/AddReview.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import access from '../../../config.js';
import 'regenerator-runtime/runtime'
import Sort from './Sort.jsx';
import axios from 'axios';
import './Ratings.css';


const Ratings = () => {
  // UseContext to get product ID
  const currentProduct = useContext(ProductContext);
  const productId = currentProduct.id;
  console.log(productId)
  const [incomingReviews, setProductReviews] = useState([]);

  const reviewData = productReviews.review.results;
  const [toggleMoreReviewButton, setToggleMoreReviewButton] = useState(true);
  const [reviewList, setReviewList] = useState([incomingReviews[0], incomingReviews[1]]);
  const [reviewIndex, setReviewIndex] = useState(2);
  const [showModal, setShowModal] = useState(false);

  //Create API call for the product reviews
  useEffect(()=> {
    // Async function to await product reviews
    const getReviews = async () => {
    const headers = {
      Authorization: access.TOKEN
    };

    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${productId}`, { headers });
    //const responseJSON = await response.json();
    setProductReviews(response.data.results);
  }

  getReviews();

    // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${productId}`, {headers: {'Authorization': `${access.TOKEN}`}
    //       })
    //       .then((response) => {
    //         setProductReviews(response.data.results);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
  },[productId]);

  console.log(incomingReviews);

  // Deal with varying review quantities
  if (reviewData.length === 0) {
    setToggleMoreReviewButton(false);
  }

  // More Reviews Button
  const moreReviewsHandler = () => {
    if (reviewData.length === reviewIndex) {
      setToggleMoreReviewButton(false);
    }

    const updateIndex = reviewIndex + 2;
    setReviewIndex(updateIndex)

    const updateReviewList = incomingReviews.slice(0, updateIndex);
    setReviewList(updateReviewList);

  }

  // Add a Review Modal
  const showModalHandler = (e) => {
    setShowModal(!showModal);
  }

  return (
    <div className='test'>
      <div className='component'>
        <Sort incomingReviews={incomingReviews} />
        <div className='reviewsRatingsContainer'>

                <div className='reviewList'>
                  <div className='reviewTiles'>
                    {/* <ReviewList reviewList={reviewList} handleClose={showModalHandler} /> */}
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
                  {/* <RatingBreakdown incomingReviews={incomingReviews} /> */}
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

