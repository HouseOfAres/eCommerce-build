import React, { useState, useEffect } from 'react';

const Size = (props) => {

  return (
    <form action="/action_page.php" className="sizeOV">
      <label for="item">Size: </label>
      <select name="size" id="sizeItemOV">
        <option value="default">--</option>
        <option value="x-small">XS</option>
        <option value="small">S</option>
        <option value="medium">M</option>
        <option value="large">L</option>
        <option value="x-large">XL</option>
        <option value="xx-large">XXL</option>
      </select>

    </form>
  )

  // import React from 'react';


//     <div className='dropDown'>
//       <button
//         id='dropButton'
//         style={{width: '195px'}}
//       >
//         {
//           Object.keys(allSizes).length === 0
//             ? 'OUT OF STOCK'
//             : selectedSize
//               ? `SIZE: ${selectedSize}`
//               : 'SELECT SIZE'
//         }
//         <img
//           src='/images/chevron-down.png'
//           style={{height: '12px'}}/>
//       </button>
//       <div className='dropDownContent'>
//         {Object.keys(allSizes).map(sizeId => {
//           return (
//             <a key={ sizeId } onClick={ onSizeSelect.bind(this, sizeId) }>SIZE: { allSizes[sizeId] }</a>
//           );
//         })}
//       </div>
//     </div>
//   );
// };



}

export default Size;