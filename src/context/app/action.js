import { SET_LOADING } from './types';

export const setLoading = (dispatch, status) => dispatch({ type: SET_LOADING, payload: status });
