import styled from 'styled-components';

import landscapeImg from '../../../assets/landscape.jpg';
import { media } from '../../../shared';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${landscapeImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 900px;

  ${media.lessThan('tablet')`
    min-height: 1000px;
  `}
`;

export const Title = styled.h1`
  display: ${({ showResults }) => (showResults ? 'none' : 'block')};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  top: 25%;
  font-size: 5rem;
  padding: 0;

  ${media.lessThan('tablet')`
    font-size: 3rem;
    top: 23%;
  `}

  ${media.lessThan('mobile')`
    font-size: 1.5rem;
  `}
`;

export const SubTitle = styled.h3`
  display: ${({ showResults }) => (showResults ? 'block' : 'none')};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 0;
  left: 20px;

  ${media.lessThan('mobile')`
    font-size: 1rem;
  `}
`;
