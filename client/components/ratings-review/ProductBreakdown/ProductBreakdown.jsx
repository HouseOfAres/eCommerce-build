import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../../ProductContext.jsx';
import Characteristic from './Characteristic.jsx';
import access from '../../../../config.js';
import axios from 'axios';
import './../Ratings.css';


const ProductBreakdown = (props) => {

  const currentProduct = useContext(ProductContext);
  const [ metaData, setMetaData ] = useState({});
  const [ isLoading, setLoading ] = useState(false);
  let productId = currentProduct.id;

useEffect(() => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${access.TOKEN}`, 'Content-Type', 'application/json');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=17070", requestOptions)
    .then(response => response.json())
    .then(result => setMetaData(result))
    .then((result) => {
        setLoading(true)
      }
    )
    .catch(error => console.log('error', error));

}, [productId])


  return (
    <div className='productBreakdown'>
      {isLoading &&
        <Characteristic productCharacteristics={metaData.characteristics}/>
      }
    </div>
  )
};

export default ProductBreakdown;