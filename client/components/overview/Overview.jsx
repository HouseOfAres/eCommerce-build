import React, { useState, useEffect } from 'react';
import styles from '../../../mock-data/styles-data.js';

// import React { useState } from 'react;'

// CHANGE NAME HERE
const Overview = () => {
// console.log(styles.productStyles.results[0].photos)


  return (
    <div className="test">
      <h1>HOUSE OF ARES - CHI'S AREA</h1>
      <img src={styles.productStyles.results[0].photos[0].thumbnail_url}></img>
      <img src={styles.productStyles.results[0].photos[1].thumbnail_url}></img>
      <img src={styles.productStyles.results[0].photos[2].thumbnail_url}></img>
      <img src={styles.productStyles.results[0].photos[3].thumbnail_url}></img>
      <img src={styles.productStyles.results[0].photos[4].thumbnail_url}></img>
      <img src={styles.productStyles.results[0].photos[5].thumbnail_url}></img>
    </div>
  )

}

// CHANGE EXPORT HERE
export default Overview;