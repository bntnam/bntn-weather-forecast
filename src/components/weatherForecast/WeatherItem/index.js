import React from 'react';

import PropTypes from 'prop-types';

import { getDay, getWeatherIconUrl, round } from '../../../shared';
import { Wrapper, Icon, Day, Status, Temp } from './style';

export const WeatherItem = ({ weatherItem }) => {
  const {
    applicable_date: applicableDate,
    weather_state_name: weatherStateName,
    weather_state_abbr: weatherStateAbbr,
    min_temp: minTemp,
    max_temp: maxTemp,
  } = weatherItem;

  return (
    <Wrapper>
      <Day>{getDay(applicableDate)}</Day>
      <Status>{weatherStateName}</Status>
      <Icon src={getWeatherIconUrl(weatherStateAbbr)} alt="Weather status" />
      <Temp>Min: {round(minTemp)}°</Temp>
      <Temp>Max: {round(maxTemp)}°</Temp>
    </Wrapper>
  );
};

WeatherItem.propTypes = {
  weatherItem: PropTypes.object.isRequired,
};
