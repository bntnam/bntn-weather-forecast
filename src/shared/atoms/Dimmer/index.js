import React from 'react';

import spinnerGif from '../../../assets/spinner.gif';
import { Container, Spinner } from './style';

export const Dimmer = () => (
  <Container>
    <Spinner src={spinnerGif} alt="Spinner" />
  </Container>
);
