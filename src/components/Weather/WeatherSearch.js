import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const WeatherSearch = ({ inputRef, handleSearch, showResults }) => (
  <WeatherSearch.Wrapper onSubmit={handleSearch} showResults={showResults}>
    <WeatherSearch.Input type="text" placeholder="Enter your city" ref={inputRef} />
    <WeatherSearch.Icon icon={faSearch} />
  </WeatherSearch.Wrapper>
);

WeatherSearch.Wrapper = styled.form`
  top: ${({ showResults }) => (showResults ? '-10%' : '25%')};
  position: relative;
  transition: 0.8s;
`;

WeatherSearch.Input = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  width: 400px;
  height: 20px;
  padding: 10px 15px 10px 20px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:focus {
    color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    outline: none;
  }
`;

WeatherSearch.Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`;

WeatherSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  showResults: PropTypes.bool,
};
