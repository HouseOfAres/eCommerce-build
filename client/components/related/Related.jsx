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

  // return (
  //   <div className="component">
  //     <h2>RELATED ITEMS</h2>
  //     <div className="related-products">
  //       <Carousel />
  //     </div>
  //   </div>

  // )

  return (
    <div className="component">
      <h2>RELATED ITEMS</h2>
      <div className="related_items_container">
        <div className="related_container">
          <i class="fas fa-arrow-circle-left" id="topleft"></i>
          <div className="product">RELATED ITEM<br></br>PLACEHOLDER</div>
          <div className="product">RELATED ITEM<br></br>PLACEHOLDER</div>
          <div className="product">RELATED ITEM<br></br>PLACEHOLDER</div>
          <div className="product" id="gradient_tile">RELATED ITEM<br></br>PLACEHOLDER</div>
          <i class="fas fa-arrow-circle-right" id="topright"></i>
        </div>
        <div className="your_list_container">
          <i class="fas fa-arrow-circle-left" id="bottomleft"></i>
          <div className="yours">LIST ITEM<br></br>PLACEHOLDER</div>
          <div className="yours">LIST ITEM<br></br>PLACEHOLDER</div>
          <div className="yours">LIST ITEM<br></br>PLACEHOLDER</div>
          <div className="yours" id="gradient_tile">LIST ITEM<br></br>PLACEHOLDER</div>
          <i class="fas fa-arrow-circle-right" id="bottomright"></i>
        </div>
      </div>
    </div>

  )

}

// CHANGE EXPORT HERE
export default Related;