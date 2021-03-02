import React from 'react';

import PropTypes from 'prop-types';

import { WeatherCurrent } from '../WeatherCurrent';
import { WeatherItem } from '../WeatherItem';
import { Wrapper, Group } from './style';

const renderWeatherItem = (weatherItem, i) => {
  if (i === 0) {
    return;
  }

  return <WeatherItem weatherItem={weatherItem} key={i} />;
};

export const WeatherList = ({ weatherList, showResults, cityName }) => (
  <Wrapper showResults={showResults}>
    <WeatherCurrent currentWeather={weatherList[0]} cityName={cityName} />
    <Group>{weatherList.map(renderWeatherItem)}</Group>
  </Wrapper>
);

WeatherList.propTypes = {
  weatherList: PropTypes.array.isRequired,
  showResults: PropTypes.bool,
  cityName: PropTypes.string.isRequired,
};
