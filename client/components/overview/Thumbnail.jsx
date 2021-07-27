import React, { useState, useEffect } from 'react';

const Thumbnail = (props) => {
  // console.log(props.imageHandle)
  return (
    <img className="ThumbnailOV" src={props.thumb.thumbnail_url} onClick={() => props.imageHandle(props.thumb.url)}></img>

  )
}

export default Thumbnail;