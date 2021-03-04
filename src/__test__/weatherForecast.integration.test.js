import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { getLocationInfo as mockGetLocationInfo } from '../api/WeatherApi';
import App from '../App';
import * as hooks from '../hooks/useWeatherSearch';
import { MOCK_LOCATION_INFO, MOCK_WEATHER_INFO } from '../shared';

jest.mock('../api/WeatherApi');

describe('Weather Forecast integration test', () => {
  test('verify that users can search for weather info by a city name', async () => {
    mockGetLocationInfo.mockResolvedValueOnce(MOCK_LOCATION_INFO);

    const { container, rerender } = render(<App />);

    // First appearance
    expect(screen.getAllByText(/weather forecast/i)).toBeDefined();
    const searchInput = screen.getByPlaceholderText(/enter.*city/i);
    expect(searchInput).toBeDefined();

    // User's typing
    user.type(searchInput, 'London');
    expect(searchInput).toHaveValue('London');

    // User's submitting
    const button = screen.getByTestId('submitButton');
    user.click(button);

    // Display loading screen
    await screen.findByAltText(/spinner/i);

    // Fire API when submitted
    expect(mockGetLocationInfo).toHaveBeenCalledWith('London');
    expect(mockGetLocationInfo).toHaveBeenCalledTimes(1);

    jest
      .spyOn(hooks, 'useWeatherSearch')
      .mockImplementation(() => ({ searchResults: MOCK_WEATHER_INFO.consolidated_weather, cityName: 'London' }));

    rerender(<App />);

    // Elements are rendered successfully
    expect(screen.getByText(/london/i)).toBeDefined();
    const weatherItems = container.querySelectorAll('.weather-item');
    expect(weatherItems).toHaveLength(MOCK_WEATHER_INFO.consolidated_weather.length);
  });
});
