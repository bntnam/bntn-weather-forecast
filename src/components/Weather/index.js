import React from 'react';

import styled from 'styled-components';

import { useWeatherSearch } from '../../hooks/useWeatherSearch';
import { ErrorMessage } from '../../shared';
import { WeatherList } from './WeatherList';
import { WeatherSearch } from './WeatherSearch';

export const Weather = () => {
  const { inputRef, handleSearch, searchResults, error } = useWeatherSearch();

  return (
    <Weather.Wrapper>
      <Weather.Title>Weather Forecast</Weather.Title>
      <WeatherSearch inputRef={inputRef} handleSearch={handleSearch} />
      {!!searchResults && <WeatherList weatherList={searchResults} />}
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
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
  justify-content: center;
  align-items: center;
`;

Weather.Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 5rem;
  padding: 0;
`;
