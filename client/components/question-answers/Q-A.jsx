import React, { useState, useEffect } from 'react';
import QuestionsList from './QuestionsList.jsx';

// import React { useState } from 'react;'

// CHANGE NAME HERE
const App = () => {

  // Returns a stateful value, and a function to update it.
  //   const [state, setState] = useState(initialState);
  //   setState(newState);


  // // Accepts a function that contains imperative, possibly effectful code.
  //   useEffect(fn);


  // // Accepts a context object (the value returned from React.
  //   const value = useContext(MyContext);

  // this is a comment... bruh.

  return (
    <div className="component">
      <div className="q_a_component">
        <div className="component_title">QUESTIONS & ANSWERS</div>
        <div className="searchBar_container">
          <form>
            <input className="searchbar" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...">
            </input>
          </form>
        </div>
        <QuestionsList />
        <div className="q_a_buttons">
          <button className="buttons">
            MORE ANSWERED QUESTIONS
          </button>
          <button className="buttons">
            ADD A QUESTION +
          </button>
        </div>
      </div>

    </div>
  )

}

// CHANGE EXPORT HERE
export default App;