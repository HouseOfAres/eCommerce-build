import React, { useState, useContext, useEffect } from 'react';
import './../Ratings.css';



const Characteristic = (props) => {
  const showChars = Object.keys(props.productCharacteristics);
  const [ showSize, setShowSize ] = useState(false);
  const [ sizeNum, setSizeNum ] = useState(0);
  const [ showFit, setShowFit ] = useState(false);
  const [ fitNum, setFitNum ] = useState(0);
  const [ showLength, setShowLength ] = useState(false);
  const [ lengthNum, setLengthNum ] = useState(0);
  const [ showComfort, setShowComfort ] = useState(false);
  const [ comfortNum, setComfortNum ] = useState(0);
  const [ showQuality, setShowQuality ] = useState(false);
  const [ qualityNum, setQualityNum ] = useState(0);


  const convertPercentage = (num) => {
    const newNum = Number(num);
    const resultNum = Math.round((num / 5) * 100);
    return resultNum;
  }

  useEffect(() => {
    if (showChars.indexOf('Size') !== -1) {
      const calcSizeNum = convertPercentage(props.productCharacteristics['Size']['value']);
      setSizeNum(calcSizeNum)
      setShowSize(true)
    }
    if (showChars.indexOf('Fit') !== -1) {
      const calcFitNum = convertPercentage(props.productCharacteristics['Fit']['value']);
      setFitNum(calcFitNum)
      setShowFit(true)
    }
    if (showChars.indexOf('Length') !== -1) {
      const calcLengthNum = convertPercentage(props.productCharacteristics['Length']['value']);
      setSizeNum(calcLengthNum)
      setShowLength(true)
    }
    if (showChars.indexOf('Comfort') !== -1) {
      const calcComfortNum = convertPercentage(props.productCharacteristics['Comfort']['value']);
      setComfortNum(calcComfortNum)
      setShowComfort(true)
    }
    if (showChars.indexOf('Quality') !== -1) {
      const calcQualityNum = convertPercentage(props.productCharacteristics['Quality']['value']);
      setQualityNum(calcQualityNum)
      setShowQuality(true)
    }
  }, [showChars])

  return (
    <div>
      {showSize &&
        <div className='size'>
          <h3 className='decriptionText'>Size</h3>
          <div className='characterBar'>
                <div className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": `${sizeNum}%` }}></i>
                </div>
          </div>
          <div className='descriptions'>
            <h6 className='leftText'>Fits Tight</h6><h6 className='rightText'>Fits Loose</h6>
          </div>
        </div>
      }

      {showFit &&
        <div className='fit'>
          <h3 className='decriptionText'>Fit</h3>
          <div className='characterBar'>
                <div className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": `${fitNum}%` }}></i>
                </div>
          </div>
          <div className='descriptions'>
            <h6 className='leftText'>MouseFeet</h6><h6 className='rightText'>ClownTown</h6>
          </div>
        </div>
      }

      {showLength &&
        <div className='fit'>
          <h3 className='decriptionText'>Length</h3>
          <div className='characterBar'>
                <div className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": `${lengthNum}%`}}></i>
                </div>
          </div>
          <div className='descriptions'>
            <h6 className='leftText'>Too Short</h6><h6 className='rightText'>Too Long</h6>
          </div>
        </div>
      }

      {showComfort &&
        <div className='fit'>
          <h3 className='decriptionText'>Comfort</h3>
          <div className='characterBar'>
                <div className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": `${comfortNum}%`}}></i>
                </div>
          </div>
          <div className='descriptions'>
            <h6 className='leftText'>Feels like a cloud</h6><h6 className='rightText'>It would hurt if mom hit you with this</h6>
          </div>
        </div>
      }

      {showQuality &&
        <div className='fit'>
          <h3 className='decriptionText'>Quality</h3>
          <div className='characterBar'>
                <div className='triangle'>
                  <i className="fa fa-caret-up fa-2x" aria-hidden="true" style={{ "paddingLeft": `${qualityNum}%`}}></i>
                </div>
          </div>
          <div className='descriptions'>
            <h6 className='leftText'>Poor</h6><h6 className='rightText'>Gucci</h6>
          </div>
        </div>
      }
    </div>
  )
};

export default Characteristic;
