import React, { useState, useEffect } from 'react';

const Thumbnail = (props) => {

  return (
    <img src={props.thumb.thumbnail_url}></img>
  )
}

export default Thumbnail;