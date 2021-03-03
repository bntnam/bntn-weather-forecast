import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { media } from '../../../shared';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  margin-bottom: 80px;

  ${media.lessThan('tablet')`
    margin-bottom: 20px;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${media.lessThan('tablet')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const Group = styled.div`
  &.weather-status {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &.weather-info {
    width: 100%;
    max-width: 450px;
    padding: 30px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
    margin-bottom: 10px;

    ${media.lessThan('tablet')`
      max-width: 400px;
    `}

    ${media.lessThan('mobile')`
      max-width: 220px;
      padding: 20px;
    `}
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusIcon = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 15px;
  filter: brightness(1.5);

  ${media.lessThan('tablet')`
    width: 80px;
  `}
`;

export const WeatherIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

export const City = styled(Text)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 5px;

  ${media.lessThan('tablet')`
    font-size: 3rem;
    text-align: center;
  `}

  ${media.lessThan('mobile')`
    font-size: 2rem;
  `}
`;

export const Day = styled(Text)`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 500;
  margin-bottom: 30px;

  ${media.lessThan('tablet')`
    font-size: 1.5rem;
    text-align: center;
  `}

  ${media.lessThan('mobile')`
    font-size: 1rem;
    font-weight: 700;
  `}
`;

export const Status = styled(Text)`
  font-size: 2rem;

  ${media.lessThan('tablet')`
    font-size: 1.5rem;
    margin-top: 5px;
    margin-bottom: 20px;
  `}

  ${media.lessThan('mobile')`
    font-size: 1rem;
    font-weight: 700;
  `}
`;

export const Info = styled(Text)`
  font-size: 2rem;
  margin-right: 5px;

  ${media.lessThan('tablet')`
    font-size: 1rem;
  `}
`;
