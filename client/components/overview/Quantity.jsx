import React, { useState, useEffect } from 'react';

const Quantity = (props) => {

  return (
    <form action="/action_page.php" className="quantityOV">
      <label for="item">Quantity: </label>
      <select name="quant" id="quantOV">
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