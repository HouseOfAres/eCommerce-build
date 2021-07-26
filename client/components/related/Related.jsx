import React, { useState, useEffect } from 'react';
import answers from '../../../mock-data/answers-list-data.js'
import Carousel from './Carousel.jsx'
// import React { useState } from 'react;'

// CHANGE NAME HERE
const Related = () => {

// // Returns a stateful value, and a function to update it.
//   const [state, setState] = useState(initialState);
//   setState(newState);


// // Accepts a function that contains imperative, possibly effectful code.
//   useEffect(fn);


// // Accepts a context object (the value returned from React.
//   const value = useContext(MyContext);

// I deleted two files and added this comment
// THIS IS A NEW CHANGE

  return (
    <div className="component">This is Related
      <Carousel />
    </div>

  )

}

// CHANGE EXPORT HERE
export default Related;