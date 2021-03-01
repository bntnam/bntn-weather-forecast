import React from 'react';

import PropTypes from 'prop-types';

export const WeatherSearch = ({ inputRef, handleSearch }) => (
  <>
    <input type="text" ref={inputRef} />
    <button onClick={handleSearch}>Search</button>
  </>
);

WeatherSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
