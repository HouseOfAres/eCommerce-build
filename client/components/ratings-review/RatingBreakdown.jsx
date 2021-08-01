import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../ProductContext.jsx';
import Stars from '../shared-features/Stars.jsx';
import access from '../../../config.js';
import axios from 'axios';
import './Ratings.css';


const RatingBreakdown = (props) => {
  const currentProduct = useContext(ProductContext);
  const [ metaData, setMetaData ] = useState({});
  const [ isLoading, setLoading ] = useState(false);
  const [ ratingBarFill, setRatingBar ] = useState({});
  let productId = currentProduct.id;

  useEffect(()=> {
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${productId}`, {headers: {'Authorization': `${access.TOKEN}`}
            })
            .then(response => response.json())
            .then((data) => {
              setMetaData(data)
              calcRatingBar(data.ratings)
              setLoading(true)
            })
            .catch((error) => {
              console.log(error);
            });
  },[productId]);


  const calcAvgRating = (array) => {
    let total = 0;
    array.forEach((item) => total += item.rating);
    const average = total / array.length;
    return Math.round(average * 10) / 10;
  };


  const calcRecommended = (data) => {
      const yesRecommends = parseInt(data['true']);
      const notRecommends = parseInt(data['false']);
      const recommendedPercentage = Math.round((yesRecommends / (yesRecommends + notRecommends)) * 100);
    return recommendedPercentage;
  }


  const calcRatingBar = (data) => {
    let sum = parseInt(data['1']) + parseInt(data['2']) + parseInt(data['3']) + parseInt(data['4']) + parseInt(data['5']);
    const fiveStar = Math.round((parseInt(data['5']) / sum) * 100);
    const fourStar = Math.round((parseInt(data['4']) / sum) * 100);
    const threeStar = Math.round((parseInt(data['3']) / sum) * 100);
    const twoStar = Math.round((parseInt(data['2']) / sum) * 100);
    const oneStar = Math.round((parseInt(data['1']) / sum) * 100);

    setRatingBar({1: `${oneStar}`, 2: `${twoStar}`, 3: `${threeStar}`, 4: `${fourStar}`, 5: `${fiveStar}`})
  }


  return (
    <div>
      <div className='mainRating'>
        <h1>{calcAvgRating(props.incomingReviews)}</h1>
        <Stars rating={calcAvgRating(props.incomingReviews)}/>

        <div className='starBar'>
          <p className='numberRating'>5 Stars</p>
            <div className='ratingBar'>
              <span className='rbars' style={{ "width": `${ratingBarFill['5']}%`}}>
              </span>
            </div>
        </div>

        <div className='starBar'>
          <p className='numberRating'>4 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": `${ratingBarFill['4']}%`}}></span>
          </div>
        </div>

        <div className='starBar'>
          <p className='numberRating'>3 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": `${ratingBarFill['3']}%`}}></span>
          </div>
        </div>

        <div className='starBar'>
         <p className='numberRating'>2 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": `${ratingBarFill['2']}%`}}></span>
          </div>
        </div>

        <div className='starBar'>
         <p className='numberRating'>1 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": `${ratingBarFill['1']}%`}}></span>
          </div>
        </div>

        {isLoading &&
        <h5>{calcRecommended(metaData.recommended)}% of reviews recommend this product</h5>}

      </div>
    </div>
  )
};

export default RatingBreakdown;