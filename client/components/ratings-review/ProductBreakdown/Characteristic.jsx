import React, { useState, useContext, useEffect } from 'react';
import './../Ratings.css';




const Characteristic = (props) => {
  const showChars = Object.keys(props.productCharacteristics);
  //console.log(showChars)
  const [ showSize, setShowSize ] = useState(true);
  const [ showFit, setShowFit ] = useState(false);
  const [ showLength, setShowLength ] = useState(false);
  const [ showComfort, setShowComfort ] = useState(false);
  const [ showQuality, setShowQuality ] = useState(false);

  useEffect(() => {
    if (showChars.indexOf('Size') !== -1) {
      setShowFit(true)
    }
    if (showChars.indexOf('Fit') !== -1) {
      setShowFit(true)
    }
    if (showChars.indexOf('Length') !== -1) {
      setShowLength(true)
    }
    if (showChars.indexOf('Comfort') !== -1) {
      setShowComfort(true)
    }
    if (showChars.indexOf('Quality') !== -1) {
      setShowQuality(true)
    }
  }, [showChars])



  return (
    <div>
      {showSize &&
        <div className='size'>
          <h5 className='decriptionText'>Size</h5>
          <span className='characterBar'>
                <span className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": "50px"}}></i>
                </span>
          </span>
          <div className='descriptions'>
            <h6 className='leftText'>Fits Tight</h6><h6 className='rightText'>Fits Loose</h6>
          </div>
        </div>
      }

      {showFit &&
        <div className='fit'>
          <h5 className='decriptionText'>Fit</h5>
          <span className='characterBar'>
                <span className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": "50px"}}></i>
                </span>
          </span>
          <div className='descriptions'>
            <h6 className='leftText'>MouseFeet</h6><h6 className='rightText'>ClownTown</h6>
          </div>
        </div>
      }

      {showLength &&
        <div className='fit'>
          <h5 className='decriptionText'>Length</h5>
          <span className='characterBar'>
                <span className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": "50px"}}></i>
                </span>
          </span>
          <div className='descriptions'>
            <h6 className='leftText'>Too Short</h6><h6 className='rightText'>Too Long</h6>
          </div>
        </div>
      }

      {showComfort &&
        <div className='fit'>
          <h5 className='decriptionText'>Comfort</h5>
          <span className='characterBar'>
                <span className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": "50px"}}></i>
                </span>
          </span>
          <div className='descriptions'>
            <h6 className='leftText'>Feels like a cloud</h6><h6 className='rightText'>It would hurt if mom hit you with this</h6>
          </div>
        </div>
      }

      {showQuality &&
        <div className='fit'>
          <h5 className='decriptionText'>Quality</h5>
          <span className='characterBar'>
                <span className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": "50px"}}></i>
                </span>
          </span>
          <div className='descriptions'>
            <h6 className='leftText'>Poor</h6><h6 className='rightText'>Gucci</h6>
          </div>
        </div>
      }
    </div>
  )
};

export default Characteristic;
