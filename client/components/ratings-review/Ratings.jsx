import { lazy, Suspense } from 'react';
const ProductBreakdown = lazy(() => import('./ProductBreakdown/ProductBreakdown.jsx'));
const AddReview = lazy(() => import('./AddReviewForm/AddReview.jsx'));
const ReviewList = lazy(() => import('./ReviewList/ReviewList.jsx'));
const RatingBreakdown = lazy(() => import('./RatingBreakdown.jsx'));
import productReviews from '../../../mock-data/reviews-data.js';
import React, { useState, useEffect, useContext } from 'react';
import productData from '../../../mock-data/products-data.js';
import { ProductContext } from '../../ProductContext.jsx';
import 'regenerator-runtime/runtime'
import Sort from './Sort.jsx';
import axios from 'axios';
import './Ratings.css';


const Ratings = () => {

  const currentProduct = useContext(ProductContext);
  const reviewData = productReviews.review.results;
  const productId = currentProduct.id;
  const [incomingReviews, setProductReviews] = useState(reviewData);
  const [toggleMoreReviewButton, setToggleMoreReviewButton] = useState(true);
  const [reviewList, setReviewList] = useState([reviewData[0], reviewData[1]]);
  const [reviewIndex, setReviewIndex] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [metaData, setMetaData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [addedReviews, setAddedReviews] = useState([]);


  useEffect(() => {
    if (productId) {

    axios.get(`/reviews/${productId}`)
      .then(async (response) => {
        try {
          const data = await response.data;
          setProductReviews(data.results);
          setReviewList([data.results[0], data.results[1]])
          setReviewsLoading(true)
        } catch (error) {
          console.log(error)
        }
      })
    }
  }, [productId, addedReviews]);

  useEffect(() => {
    if (productId) {
      axios.get(`reviews/meta/?product_id=${productId}`)
      .then((response) => {
        setMetaData(response.data)
        setLoading(true)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [productId]);

  const renderLoader = () => <p>Loading</p>;

  const handleRecommendation = (e) => {
    setSelectRecommendation(e.target.value)
  }

  const moreReviewsHandler = () => {
    if (reviewData.length === reviewIndex) {
      setToggleMoreReviewButton(false);
    }

    const updateIndex = reviewIndex + 2;
    setReviewIndex(updateIndex)

    const updateReviewList = incomingReviews.slice(0, updateIndex);
    setReviewList(updateReviewList);

    if (updateIndex >= incomingReviews.length) {
      setToggleMoreReviewButton(false);
    }

  }

  const showModalHandler = (e) => {
    setShowModal(!showModal);
  }


  const sortReviewHandler = (data) => {
    setReviewList(data);
  }


  const filterHandler = (filteredReviews) => {
    setReviewList(filteredReviews)
  }


  const addReviewHandler = () => {
    setAddedReviews([...addedReviews, 1])
  }

  return (
    <div className='component'>
      {reviewsLoading && <Sort incomingReviews={incomingReviews} sortReviewHandler={sortReviewHandler} />}
      <div className='reviewsRatingsContainer'>
        <Suspense fallback={renderLoader()}>

        <div className='reviewList'>
          <div className='reviewTiles'>
            <ReviewList reviewList={reviewList} handleClose={showModalHandler} />
          </div>
        </div>


        <div className='ratingComponent'>
          <RatingBreakdown incomingReviews={incomingReviews} filterHandler={filterHandler} />
          {isLoading &&
          <ProductBreakdown characteristics={metaData.characteristics}/>}
        </div>

        <div className='addingReviewComponent'>
          {showModal && isLoading &&
            <AddReview handleClose={showModalHandler} productName={currentProduct.name} characteristics={metaData.characteristics} id={productId} addReviewHandler={addReviewHandler} />
          }
        </div>
        <div className="review-buttons">
          {toggleMoreReviewButton &&
            <input
              className='moreButton'
              type='submit'
              value='MORE REVIEWS'
              onClick={() => { moreReviewsHandler() }} />
          }

          <input
            className='addButton'
            type='button'
            value='ADD A REVIEW +'
            onClick={showModalHandler}
          />
        </div>
        </Suspense>
      </div>
    </div>
  )
}

export default Ratings;

