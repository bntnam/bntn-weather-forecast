import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getDay, round } from '../../shared';

export const WeatherCurrent = ({ currentWeather }) => {
  const { applicable_date: applicableDate, min_temp: minTemp, max_temp: maxTemp } = currentWeather;

  return (
    <WeatherCurrent.Wrapper>
      <p>{getDay(applicableDate)}</p>
      <p>Min: {round(minTemp)}</p>
      <p>Max: {round(maxTemp)}</p>
    </WeatherCurrent.Wrapper>
  );
};

WeatherCurrent.Wrapper = styled.div`
  width: 100%;
  max-width: 100px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
`;

WeatherCurrent.propTypes = {
  currentWeather: PropTypes.object.isRequired,
};
