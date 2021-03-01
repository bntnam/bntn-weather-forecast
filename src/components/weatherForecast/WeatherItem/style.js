import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
