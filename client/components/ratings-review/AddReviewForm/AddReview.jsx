import React, { useState, useContext, useEffect } from 'react';
import './AddReview.css';

const AddReview = (props) => {
  const showChars = Object.keys(props.characteristics);
  const [ selectRecommendation, setSelectRecommendation ] = useState('yes');
  const [ selectSize, setSelectSize ] = useState('yes');
  const [ rating, setRating ] = useState(0);
  const [ hover, setHover ] = useState(0);
  const [ showSize, setShowSize ] = useState(false);
  const [ showFit, setShowFit ] = useState(false);
  const [ showLength, setShowLength ] = useState(false);
  const [ showComfort, setShowComfort ] = useState(false);
  const [ showQuality, setShowQuality ] = useState(false);
  const [ showWidth, setShowWidth ] = useState(false);
  const [ summaryForm, setSummaryForm ] = useState('');
  const [ bodyFormLength, setBodyFormLength ] = useState('');


  useEffect(() => {
    if (showChars.indexOf('Size') !== -1) {
      setShowSize(true)
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
    if (showChars.indexOf('Width') !== -1) {
      setShowWidth(true)
    }
  }, [showChars])


  const handleRecommendation = (e) => {
    setSelectRecommendation(e.target.value)
  }
  const handleSizeSelection = (e) => {
    setSelectSize(e.target.value)
  }

  const summaryChangeHandler = (e) => {
    setSummaryForm(e.target.value)
  }


  const bodyChangeHandler = (e) => {
    setBodyFormLength(e.target.value.length)
  }



  return (
    <div className='q_a_popup_box'>
      <div className='q_a_box'>
        <div className='q_a_close-icon' onClick={props.handleClose}>✖</div>
        <div className='pop_up_title'>Write your review</div>
        <div className='pop_up_subtitle'>about {props.productName}</div>
        <hr className="form_hr"></hr>
        <div className="form_data">
          <div className="form_item">
            <div className='overallRating'>
              <h3>Overall Rating*</h3>
              <div className='starRating'>
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <div className='rateButton'>
                      <button
                        type='button'
                        key={index}
                        className={ index <= rating ? 'on' : 'off' }
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        >
                        <span className='eachStar'>&#9733;</span>
                        </button>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="form_item">
            <div className='recommendation'>
              <h3>Do you recommend this product?*</h3>
              <form>
                <div className="recButton">
                  <label>
                  <input type="radio" value='yes' checked={selectRecommendation === 'yes'} onChange={handleRecommendation} />
                    Yes
                  </label>
                  <label>
                    <input type="radio" value='no' checked={selectRecommendation === 'no'} onChange={handleRecommendation} />
                    No
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="form_item">
            <h3>Characteristics*</h3>
            <div className="reviewform_characteristics_container">
              <div className="reviewform_characteristics_text">
                {showSize &&
                  <div className='showButtons'>
                    <label>Size......................................................
                      <label>
                        A size too small
                        <input type="radio" value='1' checked={selectRecommendation === '1'} onChange={handleSizeSelection} />
                      </label>
                      <label>
                        1/2 a size too small
                        <input type="radio" value='2' checked={selectRecommendation === '2'} onChange={handleSizeSelection} />
                      </label>
                      <label>
                        Perfect
                        <input type="radio" value='3' checked={selectRecommendation === '3'} onChange={handleSizeSelection} />
                      </label>
                      <label>
                        1/2 a size too big
                        <input type="radio" value='4' checked={selectRecommendation === '4'} onChange={handleSizeSelection} />
                      </label>
                      <label>
                        A size too wide
                        <input type="radio" value='5' checked={selectRecommendation === '5'} onChange={handleSizeSelection} />
                      </label>
                    </label>
                  </div>
                }
                {showWidth &&
                  <div className='showButtons'>>
                    <label>Width......................................................
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                    </label>
                  </div>
                  }
                {showComfort &&
                  <div className='showButtons'>
                     <label>Comfort....................................................
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                    </label>
                  </div>
                }
                {showQuality &&
                  <div className='showButtons'>
                    <label>Quality.......................................................
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                  </label>
                 </div>
                 }
                {showLength &&
                   <div className='showButtons'>
                    <label>Length........................................................
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                    </label>
                  </div>
                  }
                {showFit &&
                  <div className='showButtons'>
                    <label>Fit...................................................................
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                    </label>
                  </div>
                  }

              </div>
            </div>
          </div>


          <form>

            <div className="form_item">
              <h3>Review Summary</h3>
              <input placeholder="Example: Best purchase ever! (max 60 characters)" className="pop_up_input_form" type='text' onChange={summaryChangeHandler} maxLength={60} />
            </div>

            <div className="form_item">
              <h3>Review Body* </h3>
              <input placeholder="Why did you like the product or not? (min 50 characters" className="pop_up_input_form" type='textarea' maxLength={1000} onChange={bodyChangeHandler} />
              <h5>{bodyFormLength} / 1000</h5>
            </div>

            <div className='uploadPhoto'>
              <div className="form_item">
                <h3>Upload Photos (5 Max.)</h3>
              </div>
                <input type='submit' value='UPLOAD' />
            </div>

              <div className="form_item">
                <h3>Nickname</h3>
                <input placeholder="Example: jackson11!" className="pop_up_input_form" type='text' />
              </div>

            <div className="form_item">
              <h3>Email</h3>
              <input placeholder="Example: jackson11@email.com" className="pop_up_input_form" type='text' />
              <h5>“For authentication reasons, you will not be emailed” </h5>
            </div>

          </form>

          <div className="form_button">
            <button className="modal_button" type='submit'>SUBMIT REVIEW</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddReview;