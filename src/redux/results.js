import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import api from '../helpers/api';

const PONDERA_REQUEST = 'PONDERA_REQUEST';
const PONDERA_FAILURE = 'PONDERA_FAILURE';
const PONDERA_SUCCESS = 'PONDERA_SUCCESS';

/* ACTION CREATORS */

const ponderaRequest = () => ({
  type: PONDERA_REQUEST,
});

const ponderaFailure = error => ({
  type: PONDERA_FAILURE,
  error,
});

const ponderaSuccess = result => ({
  type: PONDERA_SUCCESS,
  result,
});

/* THUNK */

export const makeWeight = values => (
  async (dispatch) => {
    dispatch(ponderaRequest());
    try {
      const result = await api.getResult(values);
      dispatch(ponderaSuccess(result));
    } catch (err) {
      dispatch(ponderaFailure(err));
    }
  }
);

/* REDUCERS */

const loading = (state = false, action) => {
  switch (action.type) {
    case PONDERA_REQUEST:
      return true;
    case PONDERA_SUCCESS:
    case PONDERA_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case PONDERA_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const result = (state = null, action) => {
  switch (action.type) {
    case PONDERA_SUCCESS:
      return action.result;
    default:
      return state;
  }
};

export default combineReducers({
  result,
  error,
  loading,
});