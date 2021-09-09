import React, { useState, useEffect } from 'react';

const Quantity = (props) => {

  return (
    <form action="/action_page.php" className="quantityOV">
      <label htmlFor="item">Quantity: </label>
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

}

export default Quantity;