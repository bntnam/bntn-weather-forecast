import { render, screen } from '@testing-library/react';

import { Weather } from '.';
import * as hooks from '../../../hooks/useWeatherSearch';
import { MockProvider, MOCK_DATA } from '../../../shared';

describe('Weather component', () => {
  test('should show the expected elements when there is an error', () => {
    jest.spyOn(hooks, 'useWeatherSearch').mockImplementation(() => ({ error: MOCK_DATA.error }));

    render(
      <MockProvider>
        <Weather />
      </MockProvider>
    );

    expect(screen.getAllByText(/weather forecast/i)).toBeDefined();
    expect(screen.getByText(MOCK_DATA.error)).toBeDefined();
  });

  test('should show the expected elements when there are searched results', () => {
    jest
      .spyOn(hooks, 'useWeatherSearch')
      .mockImplementation(() => ({ searchResults: MOCK_DATA.weatherList, cityName: MOCK_DATA.cityName }));

    render(
      <MockProvider>
        <Weather />
      </MockProvider>
    );

    expect(screen.getAllByText(/weather forecast/i)).toBeDefined();
    expect(screen.getByText(MOCK_DATA.cityName)).toBeDefined();
  });
});
