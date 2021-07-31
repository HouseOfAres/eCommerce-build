import React, { useState, useEffect, useContext } from 'react';
import image from '../../../mock-data/styles-data.js';
import productInfo from '../../../mock-data/product-information.js';
import Thumbnail from './Thumbnail.jsx';
import Styles from './Styles.jsx';
import axios from 'axios';
import access from '../../../config.js';
import { ProductContext } from '../../ProductContext.jsx';
import Sale from './Sale.jsx';
import DefaultPrice from './DefaultPrice.jsx';
import Stars from '../shared-features/Stars.jsx';


const Overview = () => {
  let id = (useContext(ProductContext))

  const [main, setMain] = useState(image.productStyles.results[0].photos[0].url);
  const [nail, setNail] = useState(image.productStyles.results[0].photos);
  const [sty, setSty] = useState([])
  const [salePrice, setSalePrice] = useState('')
  const [styname, setStyname] = useState('')
  const [average, setAverage] = useState('')


  const imageHandler = (evt) => {
    setMain(evt.url)
  }

  const styleHandler = (evt) => {
    setMain(evt.photos[0].url)
    setNail(evt.photos)
    setStyname(evt.name.toUpperCase())
    setSalePrice(evt.sale_price)
    // console.log(evt)
  }


  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id.id}/styles`, {
      headers: { 'Authorization': `${access.TOKEN}` }
    })
      .then((response) => {
        setMain(response.data.results[0].photos[0].url);
        setNail(response.data.results[0].photos)
        setSty(response.data.results)
        setStyname(response.data.results[0].name.toUpperCase())
        setSalePrice(response.data.results[0].sale_price)
        // console.log(response.data.results[0].sale_price)
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${id.id}`, {
      headers: { 'Authorization': `${access.TOKEN}` }
    })
      .then((response) => {
        // setAverage(response.data.ratings)
        setAverage(totalAverage(response.data.ratings))

      })
      .catch((err) => {
        console.log(err)
      })

    const totalAverage = (data) => {
      let sum = parseInt(data['1']) + parseInt(data['2']) + parseInt(data['3']) + parseInt(data['4']) + parseInt(data['5']);

      let fiveStar = parseInt(data['5']) * 5;
      let fourStar = parseInt(data['4']) * 4;
      let threeStar = parseInt(data['3']) * 3;
      let twoStar = parseInt(data['2']) * 2;
      let oneStar = parseInt(data['2']) * 1;

      return ((fiveStar + fourStar + threeStar + twoStar + oneStar) / sum)
    }

  }, [id])


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

          <p><Stars rating={average} /> - Read all reviews</p>
          <h2 className="itemNameOV">{id.name}</h2>
          <p className="cate">CATEGORY</p>
          <div className="category-item"><h3><strong>{id.category}</strong></h3></div>
        </div>
        <div className="product-priceOV">
          <DefaultPrice sale={salePrice} price={id.default_price} />
          <Sale sale={salePrice} />

        </div>
        <div className="styleName"><h3>STYLE > {styname}</h3></div>
        <div className="stylescontainerOV">

          {sty.map((e) => {
            return <Styles style={e} styleHandle={styleHandler} />
          })}

        </div>
      </div>
    </div>
  )

}

// CHANGE EXPORT HERE
export default Overview;