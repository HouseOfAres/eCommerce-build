import React, { useState, useContext } from 'react';
import { ProductContext } from '../ProductContext.jsx';

const Slogan = () => {

  let currentProduct = useContext(ProductContext);
  const productSlogan = currentProduct.slogan;
  const productDescription = currentProduct.description;


  return (
    <div className="slogan_container">
      <div className="slogan_and_description">
        <h3 className="slogan_title">
          {productSlogan}
        </h3>
        <p className="slogan_body">
          {productDescription}
        </p>
      </div>
      <div className="slogan_list">
        <ul>
          <li>Sophia - Big Bad Boss</li>
          <li>Jair - Merge Master</li>
          <li>Chi - Inception ArCHItect</li>
          <li>Tyler - CSS Wizard</li>
        </ul>
      </div>
    </div>
  )
};

export default Slogan;