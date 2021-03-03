import React from 'react';

import { render, screen } from '@testing-library/react';

import { WeatherItem } from '.';
import { getDay, MockProvider, MOCK_DATA, round } from '../../../shared';

describe('WeatherItem component', () => {
  test('should show expected items with corresponding mock data', () => {
    render(
      <MockProvider>
        <WeatherItem weatherItem={MOCK_DATA.weatherList[0]} />
      </MockProvider>
    );
    const {
      applicable_date: applicableDate,
      weather_state_name: weatherStateName,
      min_temp: minTemp,
      max_temp: maxTemp,
    } = MOCK_DATA.weatherList[0];

    expect(screen.getByText(getDay(applicableDate))).toBeDefined();
    expect(screen.getByText(weatherStateName)).toBeDefined();
    expect(screen.getByAltText(/weather status/i)).toBeDefined();
    expect(screen.getByText(`Min: ${round(minTemp)}°`)).toBeDefined();
    expect(screen.getByText(`Max: ${round(maxTemp)}°`)).toBeDefined();
  });
});
