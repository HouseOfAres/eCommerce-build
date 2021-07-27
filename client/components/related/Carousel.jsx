import React, { useState, useEffect } from 'react';
import image from '../../../mock-data/styles-data.js';
// CHANGE NAME HERE
const Carousel = () => {

// // Returns a stateful value, and a function to update it.
//   const [state, setState] = useState(initialState);
//   setState(newState);
  const results = image.productStyles.results
  // value passed into useState should be
  const thumbnails = results.map(result => {
    return result.photos.map(photo => {
      return photo.thumbnail_url;
    })
  })
  console.log(thumbnails)
  // const [currImg, setCurrImg] = useState(photosArr[0][0])
  return (
    <div className="carousel">This is Carousel
      <div className ="carouselInner">

      </div>
    </div>
  )
}

// CHANGE EXPORT HERE
export default Carousel;