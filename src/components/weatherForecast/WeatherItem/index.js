import React from 'react';

import PropTypes from 'prop-types';

import { getDay, round } from '../../../shared';
import { Wrapper, Text } from './style';

export const WeatherItem = ({ weatherItem }) => {
  const { applicable_date: applicableDate, min_temp: minTemp, max_temp: maxTemp } = weatherItem;

  return (
    <Wrapper>
      <Text>{getDay(applicableDate)}</Text>
      <Text>Min: {round(minTemp)}</Text>
      <Text>Max: {round(maxTemp)}</Text>
    </Wrapper>
  );
};

WeatherItem.propTypes = {
  weatherItem: PropTypes.object.isRequired,
};
