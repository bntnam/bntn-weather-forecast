import { SET_LOADING } from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
