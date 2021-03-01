import React from 'react';

import PropTypes from 'prop-types';

import { getDay, round } from '../../../shared';
import { Wrapper } from './style';

export const WeatherCurrent = ({ currentWeather }) => {
  const { applicable_date: applicableDate, min_temp: minTemp, max_temp: maxTemp } = currentWeather;

  return (
    <Wrapper>
      <p>{getDay(applicableDate)}</p>
      <p>Min: {round(minTemp)}</p>
      <p>Max: {round(maxTemp)}</p>
    </Wrapper>
  );
};

WeatherCurrent.propTypes = {
  currentWeather: PropTypes.object.isRequired,
};
