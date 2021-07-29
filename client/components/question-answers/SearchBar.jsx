import React, { useState } from 'react';

const SearchBar = (props) => {

  return (
    <div className="searchBar_container">
      <form>
        <input className="searchbar" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...">
        </input>
      </form>
    </div>
  )
};

export default SearchBar;