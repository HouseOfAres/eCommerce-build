import React, { useState, useEffect } from 'react';
import SizePer from './SizePer.jsx';

const Size = (props) => {

  return (
    <form action="/action_page.php" className="sizeOV">
      <label for="item">Size: </label>
      <select name="size" id="sizeItemOV" onChange={props.sizeHandle}>
        <option value="default">--</option>
        {Object.keys(props.sku).map(e => {
          return <SizePer item={props.sku[e].size} sizeHandle={props.sizeHandle} />

        })}

      </select>
    </form>
  )


}

export default Size;