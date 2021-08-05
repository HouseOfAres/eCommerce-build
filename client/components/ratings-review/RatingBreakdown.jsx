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
  const [ average, setAverage ] = useState(0);
  const [ selectedFilters, setSelectedFilters ] = useState([]);
  const [ toggleEmptyFilter, setToggleEmptyFilter ] = useState(false);
  let productId = currentProduct.id;

  useEffect(()=> {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${access.TOKEN}`, 'Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${productId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setMetaData(result)
        calcRatingBar(result.ratings)})
      .then((result) => {
          setLoading(true)
        }
      )
      .catch(error => console.log('error', error));


    // fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${productId}`, {headers: {'Authorization': `${access.TOKEN}`, 'Content-Type': 'application/json'}
    //         })
    //         .then(response => response.json())
    //         .then(result => {
    //           setMetaData(result)
    //           calcRatingBar(result.ratings)
    //           setLoading(true)
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });
  },[productId]);


  const calcAvgRating = (data) => {
    let sum = parseInt(data['1']) + parseInt(data['2']) + parseInt(data['3']) + parseInt(data['4']) + parseInt(data['5']);
    const fiveStar = parseInt(data['5']) * 5;
    const fourStar = parseInt(data['4']) * 4;
    const threeStar = parseInt(data['3']) * 3;
    const twoStar = parseInt(data['2']) * 2;
    const oneStar = parseInt(data['1']) * 1;
    const calcAvg = (fiveStar + fourStar + threeStar + twoStar + oneStar) / sum;
    return calcAvg.toFixed(1);
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

  useEffect(() => {
    const filteredStarReviews = [];

    props.incomingReviews.forEach((review) => {
      if(selectedFilters.indexOf('5 Stars') !== -1 && review.rating === 5) {
        filteredStarReviews.push(review)
      }
      if(selectedFilters.indexOf('4 Stars') !== -1 && review.rating === 4) {
        filteredStarReviews.push(review)
      }
      if(selectedFilters.indexOf('3 Stars') !== -1 && review.rating === 3) {
        filteredStarReviews.push(review)
      }
      if(selectedFilters.indexOf('2 Stars') !== -1 && review.rating === 2) {
        filteredStarReviews.push(review)
      }
      if(selectedFilters.indexOf('1 Stars') !== -1 && review.rating === 1) {
        filteredStarReviews.push(review)
      }
    })
    if (selectedFilters.length > 0) {
      setToggleEmptyFilter(true)
    }
    if (selectedFilters.length === 0) {
      setToggleEmptyFilter(false)
    }
    props.filterHandler(filteredStarReviews)
  }, [selectedFilters])

  const filterByStars = (star) => {

    const currentIndex = selectedFilters.indexOf(star);
    let addFilter = [...selectedFilters];

    if(currentIndex === -1) {
      addFilter.push(star);
    } else {
      addFilter.splice(currentIndex, 1)
    }

    setSelectedFilters(addFilter);

  }

  useEffect(() => {
    if(!toggleEmptyFilter || selectedFilters.length === 0) {
      props.filterHandler(props.incomingReviews)
    }
  }, [toggleEmptyFilter])


  const clearFilters = () => {
    setSelectedFilters([]);
    setToggleEmptyFilter(!setToggleEmptyFilter);
  }

  return (
    <div>
      <div className='mainRating'>

        <div className='largeRating'>
          {isLoading &&
            <div className='ratingNum'>{calcAvgRating(metaData.ratings)}</div>
            }
          {isLoading &&
            <Stars rating={calcAvgRating(metaData.ratings)}/>
            }
        </div>

          <div className='filterByStars'>
            {selectedFilters.map((filter) => (
              <div className='filterStar' key={filter} onClick={() => {filterByStars(filter)}}>{filter}</div>
              ))}
              {toggleEmptyFilter && <div className='clearFilter' onClick={clearFilters}>Clear Filters</div>}
          </div>

        <div className='starBar'>
          <p className='numberRating' onClick={() => {filterByStars('5 Stars')}} value='5 Stars'>5 Stars</p>
            <div className='ratingBar'>
              <span className='rbars' style={{ "width": `${ratingBarFill['5']}%`}}>
              </span>
            </div>
            {isLoading &&
              <p className='reviewCount'> {parseInt(metaData.ratings['5'])} </p>}
        </div>

        <div className='starBar'>
          <p className='numberRating' onClick={() =>filterByStars('4 Stars')} value='4 Stars'>4 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": `${ratingBarFill['4']}%`}}></span>
          </div>
            {isLoading &&
              <p className='reviewCount'> {parseInt(metaData.ratings['4'])} </p>}
        </div>

        <div className='starBar'>
          <p className='numberRating' onClick={filterByStars} value='three' onClick={() => filterByStars('3 Stars')}>3 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": `${ratingBarFill['3']}%`}}></span>
          </div>
          {isLoading &&
              <p className='reviewCount'> {parseInt(metaData.ratings['3'])} </p>}
        </div>

        <div className='starBar'>
         <p className='numberRating' onClick={filterByStars} value= 'two' onClick={() => filterByStars('2 Stars')}>2 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": `${ratingBarFill['2']}%`}}></span>
          </div>
          {isLoading &&
              <p className='reviewCount'> {parseInt(metaData.ratings['2'])} </p>}
        </div>

        <div className='starBar'>
         <p className='numberRating' onClick={filterByStars} value= 'one' onClick={() => filterByStars('1 Stars')}>1 Stars</p>
          <div className='ratingBar'>
            <span className='rbars' style={{ "width": `${ratingBarFill['1']}%`}}></span>
          </div>
          {isLoading &&
              <p className='reviewCount'> {parseInt(metaData.ratings['1'])} </p>}
        </div>

        {isLoading &&
        <div className='smallFont'>{calcRecommended(metaData.recommended)}% of reviews recommend this product</div>}

      </div>
    </div>
  )
};

export default RatingBreakdown;