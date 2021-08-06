import React, { useState } from 'react';
// import logo from '../public/3fdfe2c633aef5a5091d72734c294522.png';
const NavigationBar = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleModalHandler = (e) => {
    e.preventDefault
    setToggleModal(!toggleModal);
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div>
      <div className="nav">
        <h1 className="makeTransparent">ARES</h1>
        <img className="logo" src="http://localhost:3000/8e9e6826b801a41c682965a69d6cb1b4.png" height="50px" alt="jair"></img>

        <div className="jair" onClick={toggleModalHandler}>

          <div className="jairIcon">
            <span>Need help? Ask Jair!</span>
            <i className="fas fa-street-view fa-xs"></i>
          </div>
        </div>

        {toggleModal &&
          <div className='q_a_popup_box'>
            <div className='q_a_box'>
              <div className='q_a_close-icon' onClick={toggleModalHandler}>✖</div>
              How can I help? :D
              <img src="https://ca.slack-edge.com/T0455847Q-U01V0KHUK0F-234f03c86616-512" alt="logo"></img>
            </div>
          </div>
        }
        {!showMenu &&
          <>
            <i onClick={handleMenuClick} class="fas fa-bars"></i>
          </>
        }
        {showMenu &&
          <>
            <i onClick={handleMenuClick} class="fas fa-times"></i>
            <div className="dropDown">
              <a
                href="#Related-Items"
                className="remove_underline">
                <div
                  onClick={handleMenuClick}
                  className="menu_item">
                  Related Items
                </div>
              </a>
              <a
                href="#Questions&Answers"
                className="remove_underline" >
                <div
                  onClick={handleMenuClick}
                  className="menu_item">
                  Questions & Answers
                </div>
              </a>
              <a
                href="#Ratings&Reviews"
                className="remove_underline">
                <div
                  onClick={handleMenuClick}
                  className="menu_item">
                  Product Reviews
                </div>
              </a>
            </div>
          </>
        }
      </div>
      <div className="site_wide_announce"><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> — Y'ALL ARE <strong>AWESOME!</strong> — <u>KEEP UP THE GOOD WORK!</u></div>
    </div >
  )
};

export default NavigationBar;