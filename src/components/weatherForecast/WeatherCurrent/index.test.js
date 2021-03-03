import React from 'react';

import { render, screen } from '@testing-library/react';

import { WeatherCurrent } from '.';
import { getDay, MockProvider, MOCK_DATA, round } from '../../../shared';

describe('WeatherItem component', () => {
  test('should show expected items with corresponding mock data', () => {
    render(
      <MockProvider>
        <WeatherCurrent currentWeather={MOCK_DATA.weatherList[0]} cityName={MOCK_DATA.cityName} />
      </MockProvider>
    );
    const {
      applicable_date: applicableDate,
      weather_state_name: weatherStateName,
      min_temp: minTemp,
      max_temp: maxTemp,
      humidity,
      wind_speed: windSpeed,
      predictability,
    } = MOCK_DATA.weatherList[0];
    const { cityName } = MOCK_DATA;

    expect(screen.getByText(cityName)).toBeDefined();
    expect(screen.getByText(getDay(applicableDate))).toBeDefined();
    expect(screen.getByText(weatherStateName)).toBeDefined();
    expect(screen.getByAltText(/weather status/i)).toBeDefined();
    expect(screen.getByText(`${round(minTemp)}°`)).toBeDefined();
    expect(screen.getByText(`${round(maxTemp)}°`)).toBeDefined();
    expect(screen.getByText(`${humidity}%`)).toBeDefined();
    expect(screen.getByText(`${predictability}%`)).toBeDefined();
    expect(screen.getByText(`${windSpeed.toFixed(2)}mph`)).toBeDefined();
  });
});
