// import React, { useState, useEffect } from 'react';
// import image from '../../../mock-data/styles-data.js';

// // CHANGE NAME HERE
// const Carousel = () => {

// // // Returns a stateful value, and a function to update it.
// //   const [state, setState] = useState(initialState);
// //   setState(newState);
//   const results = image.productStyles.results
//   // value passed into useState should be
//   const thumbnails = results.map(result => {
//     return result.photos.map(photo => {
//       return photo.thumbnail_url;
//     })
//   })
//   const [currArr, setCurrArr] = uskjkjeState(0)
//   const [currImg, setCurrImg] = useState(0)
//   return (
//     <div className="carousel">
//       <div className ="carouselInner" style={{backgroundImage: `url(${thumbnails[currArr][currImg]})`}}>
//         <div className="left">
//           <button onClick={() => {
//             currImg > 0 && setCurrImg(currImg - 1)
//           }}>Back</button>
//         </div>
//         <div className ="center"></div>
//         <div className ="right">
//           <button onClick={() => {
//             currImg < 5 && setCurrImg(currImg + 1)
//           }}>Next</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // CHANGE EXPORT HERE
// export default Carousel;