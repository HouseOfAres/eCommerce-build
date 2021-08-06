import React, { useState } from 'react';
// import logo from '../public/3fdfe2c633aef5a5091d72734c294522.png';
const NavigationBar = () => {
  const [ toggleModal, setToggleModal ] = useState(false);

  const toggleModalHandler = (e) => {
    e.preventDefault
    setToggleModal(!toggleModal);
  }

  return (
    <div>
      <div className="nav">
      <h1 className="makeTransparent">ARES</h1>
        <img className="logo" src="http://localhost:3000/8e9e6826b801a41c682965a69d6cb1b4.png" height="50px" alt="jair"></img>

        <div className="jair" onClick={toggleModalHandler}>
          <div className="jairIcon">Need help? Ask Jair!
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
      </div>
      <div className="site_wide_announce"><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> — Y'ALL ARE <strong>AWESOME!</strong> — <u><a href="https://www.youtube.com/watch?v=NUYvbT6vTPs" target="_blank">KEEP UP THE GOOD WORK!</a></u></div>
    </div>
  )
};

export default NavigationBar;