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
    // if (showChars.indexOf('Width') !== -1) {
    //   const calcQualityNum = convertPercentage(props.productCharacteristics['Width']['value']);
    //   setQualityNum(calcQualityNum)
    //   setShowQuality(true)
    // }
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
            <div className='leftText'>Fits Tight</div><div className='rightText'>Fits Loose</div>
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
            <div className='leftText'>MouseFeet</div><div className='rightText'>ClownTown</div>
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
            <div className='leftText'>Too Short</div><div className='rightText'>Too Long</div>
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
            <div className='leftText'>Feels like a cloud</div><div className='rightText'>It would hurt if mom hit you with this</div>
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
            <div className='leftText'>Poor</div><div className='rightText'>Gucci</div>
          </div>
        </div>
      }
    </div>
  )
};

export default Characteristic;
