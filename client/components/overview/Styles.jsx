import React, { useState, useEffect } from 'react';

const Styles = (props) => {


  return (
    <img className="styleOV" src={props.style.photos[0].thumbnail_url} onClick={() => props.styleHandle(props.style)}></img>
  )

}

export default Styles;