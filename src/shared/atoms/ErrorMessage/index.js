import React from 'react';

import { faFrown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { Wrapper, Text, Icon } from './style';

export const ErrorMessage = ({ children }) => (
  <Wrapper>
    <Text>{children}</Text>
    <Icon icon={faFrown} size="2x" />
  </Wrapper>
);

ErrorMessage.propTypes = {
  children: PropTypes.string,
};
