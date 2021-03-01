import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('./images/landscape.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  opacity: ${({ showResults }) => (showResults ? '0' : '1')};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  top: 25%;
  font-size: 5rem;
  padding: 0;
  transition: 0.5s;
`;

export const SubTitle = styled.h3`
  opacity: ${({ showResults }) => (showResults ? '1' : '0')};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 0;
  left: 20px;
  transition: 0.5s;
`;
