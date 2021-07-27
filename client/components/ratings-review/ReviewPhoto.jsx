import React, { useState } from 'react';

const ReviewPhoto = (props) => {

  return (
      <img src={props.photo.url} height="75" width="auto"/>
  )
};

export default ReviewPhoto;