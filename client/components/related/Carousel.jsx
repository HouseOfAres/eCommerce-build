import React, { useState, useEffect } from 'react';
import image from '../../../mock-data/styles-data.js';
// CHANGE NAME HERE
const Carousel = () => {

// // Returns a stateful value, and a function to update it.
//   const [state, setState] = useState(initialState);
//   setState(newState);
  const results = image.productStyles.results
  return (
    <div className="carousel">This is Carousel
      <div className ="carouselInner">
        {results.map(result => {
          return result.photos.map(photo => {
            return <img src={photo.thumbnail_url} />;
          })
        })}
      </div>
    </div>
  )
}

// CHANGE EXPORT HERE
export default Carousel;