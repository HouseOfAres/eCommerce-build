import React, { useState, useEffect } from 'react';
import image from '../../../mock-data/styles-data.js';
import Thumbnail from './Thumbnail.jsx'

// import React { useState } from 'react;'

// CHANGE NAME HERE
const Overview = () => {
// console.log(styles.productStyles.results[0].photos)
  const [main, setMain] = useState(image.productStyles.results[0].photos[0].url);

  const imageHandler = (event) => {
    setMain(event)
    console.log(event)
  }

  return (
    <div className="component">
      <h1>Main Product</h1>
      <img src={main}></img>
      {image.productStyles.results[0].photos.map((e) => {
        return <Thumbnail thumb={e} imageHandle={imageHandler}/>
      })}

    </div>
  )

}

// CHANGE EXPORT HERE
export default Overview;