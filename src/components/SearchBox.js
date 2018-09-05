import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        aria-label="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
