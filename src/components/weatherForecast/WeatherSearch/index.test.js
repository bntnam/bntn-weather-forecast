import React from 'react';

import { render, screen } from '@testing-library/react';

import { WeatherSearch } from '.';
import { MockProvider } from '../../../shared';

describe('WeatherSearch component', () => {
  test('should show expected elements', () => {
    render(
      <MockProvider>
        <WeatherSearch />
      </MockProvider>
    );

    expect(screen.getByPlaceholderText(/Enter your city/i)).toBeDefined();
  });
});
