import React from 'react';

import PropTypes from 'prop-types';

import { WeatherItem } from './WeatherItem';

const renderWeatherItem = (weatherItem, i) => <WeatherItem weatherItem={weatherItem} key={i} />;

export const WeatherList = ({ weatherList }) => <>{weatherList.map(renderWeatherItem)}</>;

WeatherList.propTypes = {
  weatherList: PropTypes.array.isRequired,
};
