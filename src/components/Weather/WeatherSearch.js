import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

export const WeatherSearch = ({ inputRef, handleSearch }) => (
  <WeatherSearch.Wrapper onSubmit={handleSearch}>
    <WeatherSearch.Input type="text" placeholder="Enter your city" ref={inputRef} />
  </WeatherSearch.Wrapper>
);

WeatherSearch.Wrapper = styled.form`
  margin-bottom: 300px;
`;

WeatherSearch.Input = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  width: 400px;
  height: 20px;
  padding: 10px 15px 10px 40px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: 0.2s;

  &:focus {
    color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    outline: none;
  }
`;

WeatherSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
