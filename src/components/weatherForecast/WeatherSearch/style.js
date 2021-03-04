import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { media } from '../../../shared';

export const Wrapper = styled.form`
  top: ${({ showResults }) => (showResults ? '0%' : '15%')};
  position: relative;
  transition: 0.8s;
  margin-top: 100px;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  width: 400px;
  height: 20px;
  padding: 10px 15px 10px 20px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:focus {
    color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  ${media.lessThan('tablet')`
    width: 300px;
    padding: 10px 10px 10px 20px;
  `}

  ${media.lessThan('mobile')`
    width: 200px;
  `}
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
  cursor: pointer;

  ${media.lessThan('tablet')`
    right: 0;
  `}

  ${media.lessThan('tablet')`
    right: 10px;
  `}
`;
