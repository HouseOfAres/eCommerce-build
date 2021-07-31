import React, { useState, useEffect } from 'react';

const Sale = (props) => {

  if (props.sale !== null) {
    return (
      <p className="salePriceOV">SALE: ${props.sale}</p>
    )
  } else {
    return (
      <p></p>
    )
  }


}

export default Sale;