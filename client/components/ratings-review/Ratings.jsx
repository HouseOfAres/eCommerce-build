import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';

const Ratings = () => {

// // Returns a stateful value, and a function to update it.
//   const [state, setState] = useState(initialState);
//   setState(newState);
// // Accepts a function that contains imperative, possibly effectful code.
//   useEffect(fn);
// // Accepts a context object (the value returned from React.
//   const value = useContext(MyContext);

  return (
    <div className='test'>
      <div className='component'>THIS IS THE RATINGS CONTAINER
        <div className='reviewsRatingsContainer'>

                <div className='reviewList'>
                  <h2>This will be the ReviewList Component</h2>
                  <div className='reviewTiles'>
                    <h3>These will be the individual review tiles</h3>
                    <ReviewList />
                  </div>
                </div>

                <div className='ratingComponent'>
                  <h2>This will be the Rating Component which needs to be left of the ratings component</h2>
                </div>

        </div>
      </div>
    </div>

  )

}

// CHANGE EXPORT HERE
export default Ratings;