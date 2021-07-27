import React, { useState } from 'react';

const Slogan = () => {

  return (
    <div className="slogan_container">
      <h3 className="slogan_title">
        Product Slogan. Pithy Description Or Catchphrase.
      </h3>
      <p className="slogan_body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
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