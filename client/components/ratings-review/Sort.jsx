import React, { useState, useEffect } from 'react';
import './Ratings.css';

const Sort = (props) => {

  const [sortType, setSortType] = useState('relevance');

  useEffect(() => {
    if (props.incomingReviews) {
      const sortArray = sortBy => {
        const types = {
          relevance: 'relevance',
          helpfulness: 'helpfulness',
          date: 'date'
        };
        const sortProperty = types[sortBy];
        var sortedReviews;

        if (sortProperty === 'date') {
          sortedReviews = [...props.incomingReviews].sort((a, b) => -a.date.localeCompare(b.date))
          props.sortReviewHandler(sortedReviews);

        } else if (sortProperty === 'relevance') {
          sortedReviews = [...props.incomingReviews].sort((a, b) => {
            if(a.helpfulness > b.helpfulness) return -1;
            if (a.helpfulness < b.helpfulness) return 1;
            if (-a.date.localeCompare(b.date)) return 1;
            if (!-a.date.localeCompare(b.date)) return -1;
          })
          props.sortReviewHandler(sortedReviews);

        } else if (sortProperty === 'helpfulness') {
          sortedReviews = [...props.incomingReviews].sort((a, b) => (a.helpfulness < b.helpfulness ? 1 : -1));
          props.sortReviewHandler(sortedReviews);
        }
      }

      sortArray(sortType);
    }
  }, [sortType]);

  return (
    <div className="ratings_and_reviews_title">
      <h2>RATINGS &amp; REVIEWS</h2>
      <div className='sort'>{props.incomingReviews.length} Reviews, Sort on :
        <select className='sortDropdown' onChange={(e) => setSortType(e.target.value)} aria-label="sortby">
          <option value='relevance'>Relevance</option>
          <option value='helpfulness'>Helpful</option>
          <option value='date'>Newest</option>
        </select>
      </div>
    </div>
  )
};

export default Sort;