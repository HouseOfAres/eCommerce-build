import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../../ProductContext.jsx';
import Characteristic from './Characteristic.jsx';
import './../Ratings.css';


const ProductBreakdown = (props) => {

  return (
    <div className='productBreakdown'>
      <Characteristic productCharacteristics={props.characteristics}/>
    </div>
  )
};

export default ProductBreakdown;