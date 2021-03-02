import styled, { keyframes } from 'styled-components';

import { media } from '../../../shared';

const appear = keyframes`
  from { 
    transform: translateY(50%);
    opacity: 0;
  } 
  to {
    transform: translateY(0);
    opacity: 1
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  animation: ${appear} 0.5s;
  padding: 0 20px;
  margin-top: 50px;

  ${media.lessThan('tablet')`
    max-width: 640px;
  `}

  ${media.lessThan('mobile')`
    padding: 0;
  `}
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan('mobile')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    row-gap: 10px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 20px;
  `}
`;
