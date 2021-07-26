import React, { useState, useEffect } from 'react';

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
        <span>QUESTIONS & ANSWERS</span>
        <div className="searchBar"></div>
        <div className="q_a_subcomponent">
          <div className="questions"></div>
          <div className="answers"></div>
        </div>
        <div className="q_a_buttons"></div>
      </div>

    </div>
  )

}

// CHANGE EXPORT HERE
export default App;