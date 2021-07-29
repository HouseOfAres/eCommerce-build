import React, { useState, useEffect } from 'react';

const Styles = (props) => {
  // console.log(props.style)
  return (
    // <img className="ThumbnailOV" src={props.thumb.thumbnail_url} onClick={() => props.imageHandle(props.thumb.url)}></img>
    <img className="styleOV" src={props.style.photos[0].thumbnail_url} onClick={() => props.imageHandle(props.style.photos[0].url)}></img>
  )
}

export default Styles;