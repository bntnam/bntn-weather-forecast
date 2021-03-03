import React from 'react';

import { render } from '@testing-library/react';

import { ErrorMessage } from '.';
import { MockProvider } from '../../mockTest';

describe('ErrorMessage component', () => {
  test('should match the snapshot', () => {
    const { container } = render(
      <MockProvider>
        <ErrorMessage />
      </MockProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
