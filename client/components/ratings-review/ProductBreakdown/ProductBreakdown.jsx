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

  useEffect(()=> {
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${productId}`, {headers: {'Authorization': `${access.TOKEN}`}
            })
            .then(response => response.json())
            .then((data) => {
              setMetaData(data)
              setLoading(true)
            })
            .catch((err) => {
              console.log(err);
            });
  },[productId]);

  return (
    <div className='productBreakdown'>
      {isLoading &&
        <Characteristic productCharacteristics={metaData.characteristics}/>
      }
    </div>
  )
};

export default ProductBreakdown;