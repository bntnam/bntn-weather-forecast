import React from 'react';

import PropTypes from 'prop-types';

export const WeatherItem = ({ weatherItem }) => {
  const { weather_state_name: weatherStateName } = weatherItem;

  return <li>{weatherStateName}</li>;
};

WeatherItem.propTypes = {
  weatherItem: PropTypes.object.isRequired,
};
