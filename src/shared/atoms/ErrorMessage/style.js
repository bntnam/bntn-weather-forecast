import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

import { media } from '../../styles';

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
  max-width: 500px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${appear} 0.5s;
  margin-top: 50px;

  ${media.lessThan('tablet')`
    max-width: 400px;
    padding: 5px;
  `}

  ${media.lessThan('mobile')`
    max-width: 300px;
    padding: 5px;
  `}
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;

  ${media.lessThan('tablet')`
    font-size: 1.2rem;
  `}

  ${media.lessThan('mobile')`
    font-size: 1rem;
  `}
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.white};

  ${media.lessThan('tablet')`
    width: 30px !important;
  `}

  ${media.lessThan('mobile')`
    width: 20px !important;
  `}
`;
