import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getDay, round } from '../../shared';

export const WeatherItem = ({ weatherItem }) => {
  const { applicable_date: applicableDate, min_temp: minTemp, max_temp: maxTemp } = weatherItem;

  return (
    <WeatherItem.Wrapper>
      <WeatherItem.Text>{getDay(applicableDate)}</WeatherItem.Text>
      <WeatherItem.Text>Min: {round(minTemp)}</WeatherItem.Text>
      <WeatherItem.Text>Max: {round(maxTemp)}</WeatherItem.Text>
    </WeatherItem.Wrapper>
  );
};

WeatherItem.Wrapper = styled.div`
  width: 100%;
  max-width: 100px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
`;

WeatherItem.Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

WeatherItem.propTypes = {
  weatherItem: PropTypes.object.isRequired,
};
