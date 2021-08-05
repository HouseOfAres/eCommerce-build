import React, { useState, useEffect } from 'react';

const Thumbnail = (props) => {
  // console.log(props.style)
  // <img className="typeOV" src={image.productStyles.results[1].photos[0].thumbnail_url}></img>
  return (
    <img className="ThumbnailOV" src={props.thumb.thumbnail_url} onClick={() => props.imageHandle(props.thumb)} alt="thumbnail overview"></img>

  )
}

export default Thumbnail;