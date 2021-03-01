import React from 'react';

import styled from 'styled-components';

import { useWeatherSearch } from '../../hooks/useWeatherSearch';
import { ErrorMessage } from '../../shared';
import { WeatherList } from './WeatherList';
import { WeatherSearch } from './WeatherSearch';

export const Weather = () => {
  const { inputRef, handleSearch, searchResults, error, showResults } = useWeatherSearch();

  return (
    <Weather.Wrapper>
      <Weather.Title showResults={showResults}>Weather Forecast</Weather.Title>
      <Weather.SubTitle showResults={showResults}>Weather Forecase</Weather.SubTitle>
      <WeatherSearch inputRef={inputRef} handleSearch={handleSearch} showResults={showResults} />
      {searchResults?.length >= 1 && <WeatherList weatherList={searchResults} showResults={showResults} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Weather.Wrapper>
  );
};

Weather.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('./images/landscape.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Weather.Title = styled.h1`
  opacity: ${({ showResults }) => (showResults ? '0' : '1')};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  top: 25%;
  font-size: 5rem;
  padding: 0;
  transition: 0.5s;
`;

Weather.SubTitle = styled.h3`
  opacity: ${({ showResults }) => (showResults ? '1' : '0')};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 0;
  left: 20px;
  transition: 0.5s;
`;
