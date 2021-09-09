import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import './AddReview.css';

const AddReview = (props) => {
  const showChars = Object.keys(props.characteristics);
  const [ selectRecommendation, setSelectRecommendation ] = useState(true);
  const [ selectSize, setSelectSize ] = useState(0);
  const [ selectComfort, setSelectComfort ] = useState(0);
  const [ selectQuality, setSelectQuality ] = useState(0);
  const [ selectWidth, setSelectWidth ] = useState(0);
  const [ selectLength, setSelectLength ] = useState(0);
  const [ selectFit, setSelectFit ] = useState(0);
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
  const [ errors, setErrors ] = useState([]);


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
    if (e.target.value === 'true') {
      setSelectRecommendation(true)
    }
    if (e.target.value === 'false') {
      setSelectRecommendation(false)
    }
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
    console.log('You just uploaded: ', selectedFile)
  }

  const validate = (form) => {
    let foundErrors = [];

    if (form.rating === 0) {
      foundErrors.push('Please select a rating!');
    }
    if (form.recommend === null) {
      foundErrors.push('Please select recommendation!');
    }
    if (bodyFormLength < 50 || bodyFormLength > 1000) {
      foundErrors.push('Review body must be between 50 and 1000 characters');
    }
    if (form.name === '') {
      foundErrors.push('Username Required');
    }
    if (form.email === '') {
      foundErrors.push('Email Required');
    }
    if (form.email.indexOf('@') === -1 || form.email.indexOf('.') === -1) {
      foundErrors.push('Please provide a valid email');
    }

    return foundErrors;
  }

  const createCharObj = () => {
    let charObj = {};

    if (showChars.indexOf('Size') !== -1) {
      charObj[props.characteristics['Size']['id']] = parseInt(selectSize);
    }
    if (showChars.indexOf('Fit') !== -1) {
      charObj[props.characteristics['Fit']['id']] = parseInt(selectFit);
    }
    if (showChars.indexOf('Length') !== -1) {
      charObj[props.characteristics['Length']['id']] = parseInt(selectLength);
    }
    if (showChars.indexOf('Comfort') !== -1) {
      charObj[props.characteristics['Comfort']['id']] = parseInt(selectComfort);
    }
    if (showChars.indexOf('Quality') !== -1) {
      charObj[props.characteristics['Quality']['id']] = parseInt(selectQuality);
    }
    if (showChars.indexOf('Width') !== -1) {
      charObj[props.characteristics['Width']['id']] = parseInt(selectWidth);
    }
    return charObj;
  }
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const final = {
      product_id: props.id,
      rating: rating,
      summary: summaryForm,
      recommend: selectRecommendation,
      body: body,
      name: name,
      email: email,
      photos: selectedFile,
      characteristics: createCharObj()
    }

    const errors = validate(final);
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    setFinalInfo(final);
    props.handleClose();
    props.addReviewHandler();

    axios.post("/reviews", final)
      // .then(response => response.text())
      .then(response => console.log(response.data))
      .catch(error => console.log('error', error));

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
                      <div className='rateButton' key={index}>
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
                    <input
                      type="radio"
                      value={true}
                      checked={selectRecommendation}
                      onChange={handleRecommendation} />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        value={false}
                        checked={!selectRecommendation}
                        onChange={handleRecommendation} />
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
                          <input type="radio" value={1} checked={selectSize === '1'} onChange={handleSizeSelection} />
                        </label>
                        <label>
                          1/2 a size too small
                          <input type="radio" value={2} checked={selectSize === '2'} onChange={handleSizeSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value={3} checked={selectSize === '3'} onChange={handleSizeSelection} />
                        </label>
                        <label>
                          1/2 a size too big
                          <input type="radio" value={4} checked={selectSize === '4'} onChange={handleSizeSelection} />
                        </label>
                        <label>
                          A size too wide
                          <input type="radio" value={5} checked={selectSize === '5'} onChange={handleSizeSelection} />
                        </label>
                      </label>
                    </div>
                  }
                  {showWidth &&
                    <div className='showButtons'>>
                      <label>Width..............
                      <label>
                          Too Narrow
                          <input type="radio" value={1} checked={selectWidth === '1'} onChange={handleWidthSelection} />
                        </label>
                        <label>
                          Slightly Narrow
                          <input type="radio" value={2} checked={selectWidth === '2'} onChange={handleWidthSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value={3} checked={selectWidth === '3'} onChange={handleWidthSelection} />
                        </label>
                        <label>
                          Slightly Wide
                          <input type="radio" value={4} checked={selectWidth === '4'} onChange={handleWidthSelection} />
                        </label>
                        <label>
                          Too Wide
                          <input type="radio" value={5} checked={selectWidth === '5'} onChange={handleWidthSelection} />
                        </label>
                      </label>
                    </div>
                    }
                  {showComfort &&
                    <div className='showButtons'>
                      <label className="labelItems"><span>Comfort................
                      <label>
                          Uncomfortable
                          <input type="radio" value={1} checked={selectComfort === '1'} onChange={handleComfortSelection} />
                        </label></span>
                        <label>
                          Slightly Uncomfortable
                          <input type="radio" value={2} checked={selectComfort === '2'} onChange={handleComfortSelection} />
                        </label>
                        <label>
                          Ok
                          <input type="radio" value={3} checked={selectComfort === '3'} onChange={handleComfortSelection} />
                        </label>
                        <label>
                          Comfortable
                          <input type="radio" value={4} checked={selectComfort === '4'} onChange={handleComfortSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value={5} checked={selectComfort === '5'} onChange={handleComfortSelection} />
                        </label>
                      </label>
                    </div>
                  }
                  {showQuality &&
                    <div className='showButtons'>
                      <label className="labelItems"><span>Quality...................
                      <label>
                          Poor
                          <input type="radio" value={1} checked={selectQuality === '1'} onChange={handleQualitySelection} />
                        </label></span>
                        <label>
                          Below Average
                          <input type="radio" value={2} checked={selectQuality === '2'} onChange={handleQualitySelection} />
                        </label>
                        <label>
                          What I expected
                          <input type="radio" value={3} checked={selectQuality === '3'} onChange={handleQualitySelection} />
                        </label>
                        <label>
                          Pretty Great
                          <input type="radio" value={4} checked={selectQuality === '4'} onChange={handleQualitySelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value={5} checked={selectQuality === '5'} onChange={handleQualitySelection} />
                        </label>
                    </label>
                  </div>
                  }
                  {showLength &&
                    <div className='showButtons'>
                      <label className="labelItems"><span>Length....................
                      <label>
                          Runs Short
                          <input type="radio" value={1} checked={selectLength === '1'} onChange={handleLengthSelection} />
                        </label></span>
                        <label>
                          Runs Slightly Short
                          <input type="radio" value={2} checked={selectLength === '2'} onChange={handleLengthSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value={3} checked={selectLength === '3'} onChange={handleLengthSelection} />
                        </label>
                        <label>
                        Runs Slightly Long
                          <input type="radio" value={4} checked={selectLength === '4'} onChange={handleLengthSelection} />
                        </label>
                        <label>
                          Runs Long
                          <input type="radio" value={5} checked={selectLength === '5'} onChange={handleLengthSelection} />
                        </label>
                      </label>
                    </div>
                    }
                  {showFit &&
                    <div className='showButtons'>
                      <label className="labelItems"><span>Fit...............................
                      <label>
                          Runs Tight
                          <input type="radio" value={1} checked={selectFit=== '1'} onChange={handleFitSelection} />
                        </label></span>
                        <label>
                          Runs Slightly Tightly
                          <input type="radio" value={2} checked={selectFit === '2'} onChange={handleFitSelection} />
                        </label>
                        <label>
                          Perfect
                          <input type="radio" value={3} checked={selectFit === '3'} onChange={handleFitSelection} />
                        </label>
                        <label>
                        Runs Slightly Long
                          <input type="radio" value={4} checked={selectFit === '4'} onChange={handleFitSelection} />
                        </label>
                        <label>
                          Runs Long
                          <input type="radio" value={5} checked={selectFit === '5'} onChange={handleFitSelection} />
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
                        <img src={photo.photoURL} alt='upload' height="30px" />
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
              <div className='errors'>
                    {errors.map(error => (
                      <li key={error}>Error: {error}</li>
                    ))}
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