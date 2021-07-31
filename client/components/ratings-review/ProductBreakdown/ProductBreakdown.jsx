import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../../ProductContext.jsx';
import Characteristic from './Characteristic.jsx';
import access from '../../../../config.js';
import axios from 'axios';
import './../Ratings.css';


const ProductBreakdown = (props) => {
  //let id = (useContext(ProductContext))
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

// "characteristics": {
//   "Fit": {
//       "id": 57222,
//       "value": "2.5975609756097561"
//   },
//   "Length": {
//       "id": 57223,
//       "value": "2.8101265822784810"
//   },
//   "Comfort": {
//       "id": 57224,
//       "value": "3.1000000000000000"
//   },
//   "Quality": {
//       "id": 57225,
//       "value": "3.1463414634146341"
//   }
// }