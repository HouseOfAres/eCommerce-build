import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';
import productReviews from '../../../mock-data/reviews-data.js';
import React, { useState, useEffect, useContext } from 'react';
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
  const reviewData = productReviews.review.results;
  const productId = currentProduct.id;
  const [incomingReviews, setProductReviews] = useState(reviewData);
  const [toggleMoreReviewButton, setToggleMoreReviewButton] = useState(true);
  const [reviewList, setReviewList] = useState([reviewData[0], reviewData[1]]);
  const [reviewIndex, setReviewIndex] = useState(2);
  const [showModal, setShowModal] = useState(false);


  useEffect(()=> {

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${productId}`, {headers: {'Authorization': `${access.TOKEN}`
     }
          })
          .then(async (response) => {
            try{
              const data = await response.data;

              setProductReviews(data.results);
              setReviewList([data.results[0], data.results[1]])
            } catch(error) {
              console.log(error)
            }
          })

          // .then((data) => {
          //   if (data.results.length === 0) {
          //     setToggleMoreReviewButton(false);
          //   } else {
          //     setProductReviews(data.results);
          //     setReviewList([data.results[0], data.results[1]])
          //   }
          // })
          // .catch((err) => {
          //   console.log(err);
          // });

  },[productId]);



  // More Reviews Button
  const moreReviewsHandler = () => {
    if (reviewData.length === reviewIndex) {
      setToggleMoreReviewButton(false);
    }

    const updateIndex = reviewIndex + 2;
    setReviewIndex(updateIndex)

    const updateReviewList = incomingReviews.slice(0, updateIndex);
    setReviewList(updateReviewList);
    // Deal with varying review quantities
    if (updateIndex >= incomingReviews.length) {
      setToggleMoreReviewButton(false);
    }

  }

  // Add a Review Modal
  const showModalHandler = (e) => {
    setShowModal(!showModal);
  }

  // Sorting
  const sortReviewHandler = (data) => {
    setReviewList(data);
  }

  return (
      <div className='component'>
        <Sort incomingReviews={incomingReviews} sortReviewHandler={sortReviewHandler}/>
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
                  <RatingBreakdown incomingReviews={incomingReviews} />
                  <ProductBreakdown />
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

  )

}

export default Ratings;

