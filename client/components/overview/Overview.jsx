import React, { useState, useEffect } from 'react';
import image from '../../../mock-data/styles-data.js';
import productInfo from '../../../mock-data/product-information.js';
import Thumbnail from './Thumbnail.jsx';
import Styles from './Styles.jsx';
// import React { useState } from 'react;'

// CHANGE NAME HERE
const Overview = () => {
  // console.log(image.productStyles.results[0].photos[0].thumbnail_url)
  const [main, setMain] = useState(image.productStyles.results[0].photos[0].url);
  const [nail, setNail] = useState(image.productStyles.results[0]);

  const imageHandler = (event) => {
    setMain(event)
    // console.log(event)
  }

  return (
    <div className="component">
      <div className="productOverView">
        <img className="Main-ImageOV" src={main}></img>
        <div className="thumbnailList">
        {nail.photos.map((e) => {
          return <Thumbnail thumb={e} imageHandle={imageHandler} />
        })}
        </div>
        <div className="category">
          <p>STARS</p>
          <p className="cate">CATEGORY</p>
          <div className="category-item"><h3>{productInfo.productInformation.category}</h3></div>
          </div>
          <div className="product-priceOV">
          ${productInfo.productInformation.default_price}
          </div>
          <div className="styleName"><h3>STYLE > FOREST GREEN & BLACK</h3></div>
          <div className="stylescontainerOV">

            {image.productStyles.results.map((e) => {
              return <Styles style={e} imageHandle={imageHandler}/>
            })}

          </div>


      </div>


    </div>
  )

}

// CHANGE EXPORT HERE
export default Overview;