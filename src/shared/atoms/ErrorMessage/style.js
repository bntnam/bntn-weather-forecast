import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

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
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.white};
`;
