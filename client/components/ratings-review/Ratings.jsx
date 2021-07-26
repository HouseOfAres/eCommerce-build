import React, { useState, useEffect } from 'react';
import './ratings.css';

// import React { useState } from 'react;'

// CHANGE NAME HERE
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

      <div className='md-grid-push-pull'>
        <div className='mbsc-row'>

            <h1>THIS IS THE RATINGS COMPONENT</h1>
            <div className='mbsc-col-8 mbsc-pull-lg-4'>
              <h2>This will be the ReviewList Component</h2>
              <div className='reviewTiles'>
                <h3>These will be the individual review tiles</h3>
              </div>
            </div>

            <div className='mbsc-col-4 mbsc-push-lg-8'>
              <h2>This will be the Rating Component which needs to be left of the ratings component</h2>
            </div>

          </div>
        </div>

    </div>
  )

}

// CHANGE EXPORT HERE
export default Ratings;