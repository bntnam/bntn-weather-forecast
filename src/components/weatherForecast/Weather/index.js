import React from 'react';

import { useWeatherSearch } from '../../../hooks/useWeatherSearch';
import { ErrorMessage } from '../../../shared';
import { WeatherList } from '../WeatherList';
import { WeatherSearch } from '../WeatherSearch';
import { Wrapper, Title, SubTitle } from './style';

export const Weather = () => {
  const { inputRef, handleSearch, searchResults, error, showResults, cityName } = useWeatherSearch();

  return (
    <Wrapper>
      <Title showResults={showResults}>Weather Forecast</Title>
      <SubTitle showResults={showResults}>Weather Forecast</SubTitle>
      <WeatherSearch inputRef={inputRef} handleSearch={handleSearch} showResults={showResults} />
      {searchResults?.length >= 1 && cityName && (
        <WeatherList weatherList={searchResults} showResults={showResults} cityName={cityName} />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};
