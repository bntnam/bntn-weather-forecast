import styled from 'styled-components';

import { media } from '../../../shared';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 140px;
  padding: 20px 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan('tablet')`
    max-width: 100px;
    padding: 20px 5px;
  `}

  ${media.lessThan('mobile')`
    max-width: 100px;
    padding: 5px 1px;
  `}
`;

export const Icon = styled.img`
  width: 30px;
  height: auto;
  margin-bottom: 15px;
  filter: brightness(1.2);
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

export const Day = styled(Text)`
  font-size: 1.5rem;
  margin-bottom: 15px;

  ${media.lessThan('tablet')`
    font-size: 1rem;
  `}
`;

export const Status = styled(Text)`
  margin-bottom: 10px;
`;

export const Temp = styled(Text)`
  font-size: 1.2rem;
  margin-bottom: 5px;

  :last-child {
    margin-bottom: 0;
  }

  ${media.lessThan('tablet')`
    font-size: 1rem;
  `}
`;
