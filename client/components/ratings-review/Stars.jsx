import React from 'react';
import './Stars.css';

const StarsTwo = (props) => {
  const starTotal = 5;
  const rating = props.rating || 0;
  const starPercentage = (rating / starTotal) * 100;
  const roundPercentage = `${(Math.round(starPercentage / 10) * 10)}%`;

    return (
      <div className="outer-star">
          <span className="inner-star" style={{ "width": roundPercentage}}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          </span>
      </div>
  );
};

export default StarsTwo;