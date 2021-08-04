import React, { useState, useEffect } from 'react';
const moment = require('moment');
import './Ratings.css';

const Sort = (props) => {

  const [sortType, setSortType] = useState('helpfulness');

  useEffect(() => {
    const sortArray = sortBy => {
      const types = {
        helpfulness: 'helpfulness',
        date: 'date'
      };
      const sortProperty = types[sortBy];
      var sortedReviews;

      if (sortProperty === 'date') {
        sortedReviews = [...props.incomingReviews].sort((a, b) => -a.date.localeCompare(b.date))
        props.sortReviewHandler(sortedReviews);

      } else {
        sortedReviews = [...props.incomingReviews].sort((a, b) => (a.sortProperty < b.sortProperty ? 1 : -1));
        props.sortReviewHandler(sortedReviews);
      }

    }

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="ratings_and_reviews_title">
      <h2>RATINGS & REVIEWS</h2>
      <div className='sort'>Sort on :
        <select className='sortDropdown' onChange={(e) => setSortType(e.target.value)}>
          <option value='relevance'>Relevance</option>
          <option value='helpfulness'>Helpful</option>
          <option value='date'>Newest</option>
        </select>
      </div>
    </div>
  )
};

export default Sort;