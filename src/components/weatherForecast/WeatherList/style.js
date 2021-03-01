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
  max-width: 1000px;
  position: relative;
  top: 300px;
  animation: ${appear} 0.5s;
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
