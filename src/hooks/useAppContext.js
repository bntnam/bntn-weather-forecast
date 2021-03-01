import { useContext } from 'react';

import { AppContext } from '../context/app';

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext);

  return { state, dispatch };
};
