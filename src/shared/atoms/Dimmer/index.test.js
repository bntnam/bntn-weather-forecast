import React from 'react';

import { render } from '@testing-library/react';

import { Dimmer } from '.';

describe('Dimmer component', () => {
  test('should match the snapshot', () => {
    const { container } = render(<Dimmer />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
