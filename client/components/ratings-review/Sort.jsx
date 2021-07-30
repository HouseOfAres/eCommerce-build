import React, { useState, useEffect } from 'react';
const moment = require('moment');
import './Ratings.css';

const Sort = (props) => {

const [ data, setData ] = useState(props.incomingReviews);
const [ sortType, setSortType ] = useState('helpfulness');

  useEffect(() => {
    const sortArray = sortBy => {
      const types = {
        helpfulness: 'helpfulness',
        date: 'date'
      };
      const sortProperty = types[sortBy];
      var sortedReviews;

      if (sortProperty === 'date') {
        sortedReviews = [...data].sort((a, b) => -a.date.localeCompare(b.date))
        //setData(sortedReviews);
        //console.log(sortedReviews);
        props.sortReviewHandler(sortedReviews);

      } else {
        sortedReviews = [...data].sort((a,b) => (a.sortProperty < b.sortProperty ? 1 : -1));
        //setData(sortedReviews);
        //console.log('Sorted by Helpfulness', data)
        props.sortReviewHandler(data);
      }

    }

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className='sort'>Sort on :
      <select className='sortDropdown' onChange={(e) => setSortType(e.target.value)}>
        {/* <option value='relevance'>Relevance</option> */}
        <option value='helpfulness'>Helpful</option>
        <option value='date'>Newest</option>
      </select>
    </div>
  )
};

export default Sort;