import React from 'react';

import { render } from '@testing-library/react';

import { LoadingScreen } from '.';
import { MockProvider } from '../../mockTest';

const mockData = {
  state: { loading: true },
};

jest.mock('../../../hooks/useAppContext', () => ({
  useAppContext: () => mockData,
}));

describe('LoadingScreen component', () => {
  test('should match the snapshot when loading', () => {
    const { container } = render(
      <MockProvider>
        <LoadingScreen loading={true} />
      </MockProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
