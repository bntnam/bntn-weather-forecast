import React from 'react';

import { render } from '@testing-library/react';

import { ErrorMessage } from '.';
import { MockTheme } from '../../mockTest';

describe('ErrorMessage component', () => {
  test('should match the snapshot', () => {
    const { container } = render(
      <MockTheme>
        <ErrorMessage />
      </MockTheme>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
