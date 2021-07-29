import React, { useState, useEffect, useContext } from 'react';
import image from '../../../mock-data/styles-data.js';
import productInfo from '../../../mock-data/product-information.js';
import Thumbnail from './Thumbnail.jsx';
import Styles from './Styles.jsx';
// import React { useState } from 'react;'
import axios from 'axios';
import access from '../../../config.js';
import { ProductContext } from '../../ProductContext.jsx';

// CHANGE NAME HERE
const Overview = () => {
  let id = (useContext(ProductContext))
  console.log(id)
  // console.log(image.productStyles.results[0].photos[0].thumbnail_url)
  const [main, setMain] = useState(image.productStyles.results[0].photos[0].url);
  const [nail, setNail] = useState(image.productStyles.results[0].photos);
  const [sty, setSty] = useState([])
  const [salePrice, setSalePrice] = useState('')
  const [styname, setStyname] = useState('')

  const imageHandler = (evt) => {
    setMain(evt.url)
    // console.log(event)
    // setNail(evt.thumbnail_url)
  }

  const styleHandler = (evt) => {
    setMain(evt.photos[0].url)
    setNail(evt.photos)
    setStyname(evt.name.toUpperCase())
  }


  useEffect(()=> {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id.id}/styles`, {headers: {'Authorization': `${access.TOKEN}`}
          })
          .then((response) => {
            setMain(response.data.results[0].photos[0].url);
            setNail(response.data.results[0].photos)
            setSty(response.data.results)
            setStyname(response.data.results[0].name.toUpperCase())

          })
          .catch((err) => {
            console.log(err);
          });
  },[id])


  return (
    <div className="component">
      <div className="productOverView">
        <img className="Main-ImageOV" src={main}></img>
        <div className="thumbnailList">
        {nail.map((e) => {
          return <Thumbnail thumb={e} imageHandle={imageHandler} />
        })}
        </div>
        <div className="category">
          <p>STARS</p>
          <p className="itemNameOV"><h1>{id.name}</h1></p>
          <p className="cate">CATEGORY</p>
          <div className="category-item"><h3><strong>{id.category}</strong></h3></div>
          </div>
          <div className="product-priceOV">
          <p>${id.default_price}</p>
          </div>
          <div className="styleName"><h3>STYLE > {styname}</h3></div>
          <div className="stylescontainerOV">

            {sty.map((e) => {
              return <Styles style={e} styleHandle={styleHandler}/>
            })}

          </div>


      </div>


    </div>
  )

}

// CHANGE EXPORT HERE
export default Overview;