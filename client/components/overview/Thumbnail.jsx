import React, { useState, useEffect } from 'react';

const Thumbnail = (props) => {

  return (
    <img className="ThumbnailOV" src={props.thumb.thumbnail_url} onClick={() => props.imageHandle(props.thumb)} alt="thumbnail overview"></img>

  )
}

export default Thumbnail;