import React, { useReducer } from 'react';
import { createContext } from 'react';

import reducer from './reducer';

export const AppContext = createContext();

export const AppStateProvider = ({ children }) => {
  const initialState = {
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export * from './action';
