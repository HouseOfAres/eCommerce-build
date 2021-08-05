import React, { useState, useEffect } from 'react';

const Quantity = (props) => {

  return (
    <form action="/action_page.php" className="quantityOV">
      <label for="item">Quantity: </label>
      <select name="quant" id="quantOV" aria-label="quantity">
        <option value="default">--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

    </form>
  )

  // return (
  //   <div className='dropDown'>
  //     <button
  //       id='dropButton'
  //       style={{width: '100px'}}>
  //       { !selectedQuantity ? '-' : selectedQuantity}
  //       <img
  //         src='/images/chevron-down.png'
  //         style={{height: '12px'}} />
  //     </button>
  //     <div className='dropDownContent' style={{width: '100px'}}>
  //       {
  //         totalQuantity === null
  //           ? null
  //           : totalQuantity < 15
  //             ? [...Array(totalQuantity).keys()].map(numb => {
  //               return <a key={numb + 1} onClick={onQuantitySelect.bind(this, numb + 1)}>{numb + 1}</a>;
  //             })
  //             : [...Array(15).keys()].map(numb => {
  //               return <a key={numb + 1} onClick={onQuantitySelect.bind(this, numb + 1)}>{numb + 1}</a>;
  //             })
  //       }
  //     </div>
  //   </div>
  // );

}

export default Quantity;