import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { Wrapper, Input, Icon } from './style';

export const WeatherSearch = ({ inputRef, handleSearch, showResults }) => (
  <Wrapper onSubmit={handleSearch} showResults={showResults}>
    <Input type="text" placeholder="Enter your city" ref={inputRef} />
    <Icon icon={faSearch} />
  </Wrapper>
);

WeatherSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  showResults: PropTypes.bool,
};
