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
          <li><strong>Sophia</strong> - Big Bad Boss</li>
          <li><strong>Jair</strong> - Merge Master</li>
          <li><strong>Chi</strong> - Inception ArCHItect</li>
          <li><strong>Tyler</strong> - CSS Wizard</li>
        </ul>
      </div>
    </div>
  )
};

export default Slogan;