import React from 'react';

import { render, screen } from '@testing-library/react';

import { WeatherList } from '.';
import { MOCK_DATA, MockProvider } from '../../../shared';

describe('WeatherList component', () => {
  test('should show expected items with corresponding mock data', () => {
    const { container } = render(
      <MockProvider>
        <WeatherList weatherList={MOCK_DATA.weatherList} cityName={MOCK_DATA.cityName} />
      </MockProvider>
    );
    const weatherItems = container.querySelectorAll('.weather-item');

    expect(weatherItems.length).toBe(MOCK_DATA.weatherList.length);
    expect(screen.getByText(MOCK_DATA.cityName)).toBeDefined();
  });
});
