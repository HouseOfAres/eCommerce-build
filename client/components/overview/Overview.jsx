import React, { useState, useEffect, useContext } from 'react';
import image from '../../../mock-data/styles-data.js';
import productInfo from '../../../mock-data/product-information.js';
import Thumbnail from './Thumbnail.jsx';
import Styles from './Styles.jsx';
import axios from 'axios';
import access from '../../../config.js';
import { ProductContext } from '../../ProductContext.jsx';
import Sale from './Sale.jsx';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx';
import DefaultPrice from './DefaultPrice.jsx';
import Stars from '../shared-features/Stars.jsx';

let count = 0;

const Overview = () => {
  let id = (useContext(ProductContext))

  const [main, setMain] = useState(image.productStyles.results[0].photos[0].url);
  const [nail, setNail] = useState(image.productStyles.results[0].photos);
  const [sty, setSty] = useState(image.productStyles.results);
  const [salePrice, setSalePrice] = useState('');
  const [styname, setStyname] = useState('');
  const [average, setAverage] = useState('');
  const [itemSku, setItemSku] = useState({});
  const [quantitySize, setQuantitySize] = useState({})
  const [cycleCount, setCycleCount] = useState(0)

  const imageHandler = (evt) => {
    setMain(evt.url)
  }

  const styleHandler = (evt) => {
    setMain(evt.photos[0].url)
    setNail(evt.photos)
    setStyname(evt.name.toUpperCase())
    setSalePrice(evt.sale_price)
    setItemSku(evt.skus)
    count = 0
  }

  const sizeHandler = (evt) => {
    setQuantitySize(evt.target.value)
  }

  const rightArrowHandler = (evt) => {
    if(nail[count + 1] !== undefined) {
      count++
      setMain(nail[count].url)
    }
  }

  const leftArrowHandler = (evt) => {
    if(count > 0) {
      count--
      setMain(nail[count].url)
    }
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
        setItemSku(response.data.results[0].skus)
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
    <div className="overviewComponent">
      <div className="productOverView">
        <img className="Main-ImageOV" src={main} alt="overview"></img>
        <div className="thumbnailList">
          {nail.map((e) => {
            return <Thumbnail thumb={e} imageHandle={imageHandler} />
          })}
        </div>
        <div className="category">

<<<<<<< HEAD
          <Stars rating={average} /> - Read all reviews
=======
          <div className="starOVcontainer"><Stars rating={average} /> - Read all reviews</div>
>>>>>>> main
          <h2 className="itemNameOV">{id.name}</h2>
          <p className="cate">CATEGORY</p>

          <div className="category-item"><h3><strong>{id.category}</strong></h3></div>
        </div>
        <div className="shareOV">
          <i className="fab fa-facebook-square fa-lg"></i>
          <i className="fab fa-twitter-square fa-lg"></i>
          <i className="fab fa-pinterest-square fa-lg"></i>

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
        <Size sku={itemSku} sizeHandle={sizeHandler}/>
        <Quantity />
        <button type="button" className="cartOV">ADD TO CART</button>
        <i class="fas fa-angle-left fa-3x" onClick={leftArrowHandler}></i>
        <i class="fas fa-angle-right fa-3x" onClick={rightArrowHandler}></i>
      </div>
    </div>
  )

}

// CHANGE EXPORT HERE
export default Overview;