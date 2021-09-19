import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tickersActions from './tickers-actions';

const initialTickersState = null;

const fetchedTickers = createReducer(initialTickersState, {
  [tickersActions.tickersSuccess]: (_, { payload }) => [...payload],
});

const fetchedInterval = createReducer(1, {
  [tickersActions.intervalSuccess]: (_, { payload }) => payload,
});

const fetchedTickersOff = createReducer([], {
  [tickersActions.tckersOff]: (state, { payload }) => {
    if (state.includes(payload)) {
      return state.filter(ticker => ticker !== payload);
    } else {
      return [...state, payload];
    }
  },
});

const error = createReducer(null, {
  [tickersActions.tickersError]: (_, { payload }) => payload,
  [tickersActions.intervalError]: (_, { payload }) => payload,

  [tickersActions.tickersSuccess]: () => null,
  [tickersActions.intervalSuccess]: () => null,
});

const loading = createReducer(false, {
  [tickersActions.tickersRequest]: () => true,
  [tickersActions.tickersSuccess]: () => false,
  [tickersActions.tickersError]: () => false,

  [tickersActions.intervalRequest]: () => true,
  [tickersActions.intervalSuccess]: () => false,
  [tickersActions.tickersError]: () => false,
});

export default combineReducers({
  fetchedTickers,
  error,
  loading,
  fetchedInterval,
  fetchedTickersOff,
});
