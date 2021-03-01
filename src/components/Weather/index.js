import React from 'react';

import { useWeatherSearch } from '../../hooks/useWeatherSearch';
import { ErrorMessage } from '../../shared/atoms/ErrorMessage';
import { WeatherList } from './WeatherList';
import { WeatherSearch } from './WeatherSearch';

export const Weather = () => {
  const { inputRef, handleSearch, searchResults, error } = useWeatherSearch();

  return (
    <>
      <WeatherSearch inputRef={inputRef} handleSearch={handleSearch} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <WeatherList weatherList={searchResults} />
    </>
  );
};
