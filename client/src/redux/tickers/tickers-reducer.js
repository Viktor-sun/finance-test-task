import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tickersActions from './tickers-actions';

const initialTickersState = null;

const fetchedTickers = createReducer(initialTickersState, {
  [tickersActions.tickersSuccess]: (_, { payload }) => [...payload],
});

const error = createReducer(null, {
  [tickersActions.tickersError]: (_, { payload }) => payload,

  [tickersActions.tickersSuccess]: () => null,
});

const loading = createReducer(false, {
  [tickersActions.tickersRequest]: () => true,
  [tickersActions.tickersSuccess]: () => false,
  [tickersActions.tickersError]: () => false,
});

export default combineReducers({
  fetchedTickers,
  error,
  loading,
});
