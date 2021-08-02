import React, { useState, useContext, useEffect } from 'react';
import './AddReview.css';

const AddReview = (props) => {
  const showChars = Object.keys(props.characteristics);
  const [ selectRecommendation, setSelectRecommendation ] = useState(null);
  const [ selectSize, setSelectSize ] = useState('');
  const [ selectComfort, setSelectComfort ] = useState('');
  const [ selectQuality, setSelectQuality ] = useState('');
  const [ selectWidth, setSelectWidth ] = useState('');
  const [ selectLength, setSelectLength ] = useState('');
  const [ selectFit, setSelectFit ] = useState('');
  const [ rating, setRating ] = useState(0);
  const [ hover, setHover ] = useState(0);
  const [ showSize, setShowSize ] = useState(false);
  const [ showFit, setShowFit ] = useState(false);
  const [ showLength, setShowLength ] = useState(false);
  const [ showComfort, setShowComfort ] = useState(false);
  const [ showQuality, setShowQuality ] = useState(false);
  const [ showWidth, setShowWidth ] = useState(false);
  const [ summaryForm, setSummaryForm ] = useState('');
  const [ body, setBody ] = useState('');
  const [ bodyFormLength, setBodyFormLength ] = useState('0');
  const [ selectedFile, setSelectedFile ] = useState([]);
  const [ toggleUpload, setToggleUpload ] = useState(true);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ finalInfo, setFinalInfo ] = useState('');


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

  const handleComfortSelection = (e) => {
    setSelectComfort(e.target.value)
  }

  const handleQualitySelection = (e) => {
    setSelectQuality(e.target.value)
  }

  const handleWidthSelection = (e) => {
    setSelectWidth(e.target.value)
  }

  const handleLengthSelection = (e) => {
    setSelectLength(e.target.value)
  }
  const handleFitSelection = (e) => {
    setSelectFit(e.target.value)
  }

  const summaryChangeHandler = (e) => {
    setSummaryForm(e.target.value)
  }

  const bodyChangeHandler = (e) => {
    setBody(e.target.value)
    setBodyFormLength(e.target.value.length)
  }

  const nameHandler = (e) => {
    setName(e.target.value)
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const fileChangedHandler = (e) => {
    e.preventDefault();
    let file_reader = new FileReader();
    let file = e.target.files[0];

    file_reader.onload = () => {
      setSelectedFile([...selectedFile, {
        uploaded_file: file_reader.result,
        photoURL: URL.createObjectURL(file) }
      ])
    }
    file_reader.readAsDataURL(file);

    if (selectedFile.length === 5) {
      setToggleUpload(false);
    }
  }

  const uploadHandler = (e) => {
    e.preventDefault();
    console.log(selectedFile)
  }

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const final = {
      product_id: props.id,
      rating: rating,
      summary: summaryForm,
      body: body,
      recommend: selectRecommendation,
      reviewer_name: name,
      email: email,
      photos: selectedFile,
      characteristics: {
        size: selectSize,
        width: selectWidth,
        comfort: selectComfort,
        quality: selectQuality,
        fit: selectFit,
        length: selectLength
      },
    }
    console.log(final);
    setFinalInfo(final);
  }

  return (
    <div className='q_a_popup_box'>
      <div className='q_a_box'>
        <div className='q_a_close-icon' onClick={props.handleClose}>✖</div>
        <div className='pop_up_title'>Write your review</div>
        <div className='pop_up_subtitle'>about {props.productName}</div>
        <hr className="form_hr"></hr>
        <form onSubmit={handleFinalSubmit}>
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
                  <div className="recButton">
                    <label>
                    <input type="radio" value='true' checked={selectRecommendation === 'true'} onChange={handleRecommendation} />
                      Yes
                    </label>
                    <label>
                      <input type="radio" value='false' checked={selectRecommendation === 'false'} onChange={handleRecommendation} />
                      No
                    </label>
                  </div>
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
                          <input type="radio" value='1' checked={selectSize === '1'} onChange={handleSizeSelection} />
                        </label>
                        <label>
                          1/2 a size too small
                          <input type="radio" value='2' checked={selectSize === '2'} onChange={handleSizeSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value='3' checked={selectSize === '3'} onChange={handleSizeSelection} />
                        </label>
                        <label>
                          1/2 a size too big
                          <input type="radio" value='4' checked={selectSize === '4'} onChange={handleSizeSelection} />
                        </label>
                        <label>
                          A size too wide
                          <input type="radio" value='5' checked={selectSize === '5'} onChange={handleSizeSelection} />
                        </label>
                      </label>
                    </div>
                  }
                  {showWidth &&
                    <div className='showButtons'>>
                      <label>Width..............
                      <label>
                          Too Narrow
                          <input type="radio" value='1' checked={selectWidth === '1'} onChange={handleWidthSelection} />
                        </label>
                        <label>
                          Slightly Narrow
                          <input type="radio" value='2' checked={selectWidth === '2'} onChange={handleWidthSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value='3' checked={selectWidth === '3'} onChange={handleWidthSelection} />
                        </label>
                        <label>
                          Slightly Wide
                          <input type="radio" value='4' checked={selectWidth === '4'} onChange={handleWidthSelection} />
                        </label>
                        <label>
                          Too Wide
                          <input type="radio" value='5' checked={selectWidth === '5'} onChange={handleWidthSelection} />
                        </label>
                      </label>
                    </div>
                    }
                  {showComfort &&
                    <div className='showButtons'>
                      <label>Comfort.............
                      <label>
                          Uncomfortable
                          <input type="radio" value='1' checked={selectComfort === '1'} onChange={handleComfortSelection} />
                        </label>
                        <label>
                          Slightly Uncomfortable
                          <input type="radio" value='2' checked={selectComfort === '2'} onChange={handleComfortSelection} />
                        </label>
                        <label>
                          Ok
                          <input type="radio" value='3' checked={selectComfort === '3'} onChange={handleComfortSelection} />
                        </label>
                        <label>
                          Comfortable
                          <input type="radio" value='4' checked={selectComfort === '4'} onChange={handleComfortSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value='5' checked={selectComfort === '5'} onChange={handleComfortSelection} />
                        </label>
                      </label>
                    </div>
                  }
                  {showQuality &&
                    <div className='showButtons'>
                      <label>Quality..........
                      <label>
                          Poor
                          <input type="radio" value='1' checked={selectQuality === '1'} onChange={handleQualitySelection} />
                        </label>
                        <label>
                          Below Average
                          <input type="radio" value='2' checked={selectQuality === '2'} onChange={handleQualitySelection} />
                        </label>
                        <label>
                          What I expected
                          <input type="radio" value='3' checked={selectQuality === '3'} onChange={handleQualitySelection} />
                        </label>
                        <label>
                          Pretty Great
                          <input type="radio" value='4' checked={selectQuality === '4'} onChange={handleQualitySelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value='5' checked={selectQuality === '5'} onChange={handleQualitySelection} />
                        </label>
                    </label>
                  </div>
                  }
                  {showLength &&
                    <div className='showButtons'>
                      <label>Length.............
                      <label>
                          Runs Short
                          <input type="radio" value='1' checked={selectLength === '1'} onChange={handleLengthSelection} />
                        </label>
                        <label>
                          Runs Slightly Short
                          <input type="radio" value='2' checked={selectLength === '2'} onChange={handleLengthSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value='3' checked={selectLength === '3'} onChange={handleLengthSelection} />
                        </label>
                        <label>
                        Runs Slightly Long
                          <input type="radio" value='4' checked={selectLength === '4'} onChange={handleLengthSelection} />
                        </label>
                        <label>
                          Runs Long
                          <input type="radio" value='5' checked={selectLength === '5'} onChange={handleLengthSelection} />
                        </label>
                      </label>
                    </div>
                    }
                  {showFit &&
                    <div className='showButtons'>
                      <label>Fit.................
                      <label>
                          Runs Tight
                          <input type="radio" value='1' checked={selectFit=== '1'} onChange={handleFitSelection} />
                        </label>
                        <label>
                          Runs Slightly Tightly
                          <input type="radio" value='2' checked={selectFit === '2'} onChange={handleFitSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value='3' checked={selectFit === '3'} onChange={handleFitSelection} />
                        </label>
                        <label>
                        Runs Slightly Long
                          <input type="radio" value='4' checked={selectFit === '4'} onChange={handleFitSelection} />
                        </label>
                        <label>
                          Runs Long
                          <input type="radio" value='5' checked={selectFit === '5'} onChange={handleFitSelection} />
                        </label>
                      </label>
                    </div>
                    }

                </div>
              </div>
            </div>


              <div className="form_item">
                <h3>Review Summary</h3>
                <input placeholder="Example: Best purchase ever! (max 60 characters)" className="pop_up_input_form" type='text' onChange={summaryChangeHandler} maxLength={60} />
              </div>

              <div className="form_item">
                <h3>Review Body* </h3>
                <input placeholder="Why did you like the product or not? (min 50 characters)" className="pop_up_input_form" type='textarea' maxLength={1000} onChange={bodyChangeHandler} />
                <h5>{bodyFormLength} / 1000</h5>
              </div>

              <div className='uploadPhoto'>
                <div className="form_item">
                  <h3>Upload Photos (5 Max.)</h3>
                </div>
                <div className='uploadPhotos'>
                  <input type='file' multiple accept='.jpeg, .png, .pdf' onChange={fileChangedHandler} />
                </div>
                <div className='previewPhotos'>
                    {
                      selectedFile.map(photo => (
                        <img src={photo.photoURL} alt='...' height="30px" />
                      ))
                    }
                </div>
                <button onClick={uploadHandler}>Upload</button>
              </div>

              <div className="form_item">
                <h3>Nickname</h3>
                <input placeholder="Example: jackson11!" className="pop_up_input_form" type='text' onChange={nameHandler} />
              </div>

              <div className="form_item">
                <h3>Email</h3>
                <input placeholder="Example: jackson11@email.com" className="pop_up_input_form" type='text' maxLength={60} onChange={emailHandler}/>
                <h5>“For authentication reasons, you will not be emailed” </h5>
              </div>

            <div className="form_button">
              <input className="modal_button" type='submit' value="SUBMIT REVIEW" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default AddReview;