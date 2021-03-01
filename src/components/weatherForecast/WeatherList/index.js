import React from 'react';

import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { WeatherCurrent } from './WeatherCurrent';
import { WeatherItem } from './WeatherItem';

const renderWeatherItem = (weatherItem, i) => {
  if (i === 0) {
    return;
  }

  return <WeatherItem weatherItem={weatherItem} key={i} />;
};

export const WeatherList = ({ weatherList, showResults }) => (
  <WeatherList.Wrapper showResults={showResults}>
    <WeatherCurrent currentWeather={weatherList[0]} />
    <WeatherList.Group>{weatherList.map(renderWeatherItem)}</WeatherList.Group>
  </WeatherList.Wrapper>
);

const appear = keyframes`
  from { 
    transform: translateY(50%);
    opacity: 0;
  } 
  to {
    transform: translateY(0);
    opacity: 1
  }
`;

WeatherList.Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  position: relative;
  top: 300px;
  animation: ${appear} 0.5s;
`;

WeatherList.Group = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

WeatherList.propTypes = {
  weatherList: PropTypes.array.isRequired,
  showResults: PropTypes.bool,
};
