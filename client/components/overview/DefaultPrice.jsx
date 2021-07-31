import React, { useState, useEffect } from 'react';

const DefaultPrice = (props) => {
 
  if (props.sale === null) {
    return (
      <p>${props.price}</p>
    )
  } else {
    return (
      <p className="defaultPriceOV">${props.price}</p>
    )
  }



}


export default DefaultPrice;