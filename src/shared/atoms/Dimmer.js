import React from 'react';

import styled from 'styled-components';

import Spinner from '../../assets/spinner.gif';

export const Dimmer = () => (
  <Dimmer.Container>
    <Dimmer.Spinner src={Spinner} alt="Spinner" />
  </Dimmer.Container>
);

Dimmer.Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

Dimmer.Spinner = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
