import { createAction } from '@reduxjs/toolkit';

const tickersRequest = createAction('tickers/fetchTickersRequest');
const tickersSuccess = createAction('tickers/fetchTickersSuccess');
const tickersError = createAction('tickers/fetchTickersError');

const intervalRequest = createAction('tickers/fetchIntervalRequest');
const intervalSuccess = createAction('tickers/fetchIntervalSuccess');
const intervalError = createAction('tickers/fetchIntervalError');

// eslint-disable-next-line
export default {
  tickersRequest,
  tickersSuccess,
  tickersError,
  intervalRequest,
  intervalSuccess,
  intervalError,
};
