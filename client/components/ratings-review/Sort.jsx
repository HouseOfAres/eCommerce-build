import React, { useState, useEffect } from 'react';
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
      // The initial sort for HELPFULNESS IS WORKING :)
      // BUG: it is only sorting the first two items in the list. Needs to respond to the MORE REVIEWS LIST...
      const sortedReviews = [...data].sort((a,b) => (a.sortProperty < b.sortProperty ? 1 : -1));
      //a[sortProperty] - b[sortProperty]);

      // Newest IS NOT WORKING
        // For sorting ISO Dates
          // [...data].sort((a,b) => (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0))))
      setData(sortedReviews);
      console.log(data);
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