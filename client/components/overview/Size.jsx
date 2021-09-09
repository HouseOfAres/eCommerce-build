import React, { useState, useEffect } from 'react';
import SizePer from './SizePer.jsx';

const Size = (props) => {

  return (
    <form action="/action_page.php" className="sizeOV">
      <label htmlFor="item">Size: </label>
      <select name="size" id="sizeItemOV" aria-label="size" onChange={props.sizeHandle}>
        <option value="default">--</option>
        {Object.keys(props.sku).map((e, i) => {
          return <SizePer item={props.sku[e].size} key={i} sizeHandle={props.sizeHandle} />

        })}

      </select>
    </form>
  )


}

export default Size;