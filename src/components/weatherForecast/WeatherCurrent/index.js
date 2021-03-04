import React from 'react';

import { faThermometerEmpty, faThermometerFull, faTint, faWind, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { getDay, getWeatherIconUrl, round } from '../../../shared';
import { Wrapper, Container, Group, Box, StatusIcon, WeatherIcon, City, Day, Status, Info } from './style';

export const WeatherCurrent = ({ currentWeather, cityName }) => {
  const {
    applicable_date: applicableDate,
    weather_state_name: weatherStateName,
    weather_state_abbr: weatherStateAbbr,
    min_temp: minTemp,
    max_temp: maxTemp,
    humidity,
    wind_speed: windSpeed,
    predictability,
  } = currentWeather;

  return (
    <Wrapper className="weather-current weather-item">
      <City>{cityName}</City>
      <Day>{getDay(applicableDate)}</Day>
      <Container>
        <Group className="weather-status">
          <StatusIcon src={getWeatherIconUrl(weatherStateAbbr)} alt="Weather status" />
          <Status>{weatherStateName}</Status>
        </Group>
        <Group className="weather-info">
          <Box>
            <WeatherIcon icon={faThermometerEmpty} size="2x" />
            <Info>{round(minTemp)}°</Info>
          </Box>
          <Box>
            <WeatherIcon icon={faThermometerFull} size="2x" />
            <Info>{round(maxTemp)}°</Info>
          </Box>
          <Box>
            <WeatherIcon icon={faTint} size="2x" />
            <Info>{humidity}%</Info>
          </Box>
          <Box>
            <WeatherIcon icon={faWind} size="2x" />
            <Info>{windSpeed.toFixed(2)}mph</Info>
          </Box>
          <Box>
            <WeatherIcon icon={faUmbrella} size="2x" />
            <Info>{predictability}%</Info>
          </Box>
        </Group>
      </Container>
    </Wrapper>
  );
};

WeatherCurrent.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  cityName: PropTypes.string.isRequired,
};
