import { createAction } from '@reduxjs/toolkit';

const tickersRequest = createAction('tickers/fetchTickersRequest');
const tickersSuccess = createAction('tickers/fetchTickersSuccess');
const tickersError = createAction('tickers/fetchTickersError');

// eslint-disable-next-line
export default { tickersRequest, tickersSuccess, tickersError };
