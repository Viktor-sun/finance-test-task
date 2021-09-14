import { configureStore } from '@reduxjs/toolkit';
import tickersReducer from './tickers/tickers-reducer';

const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
});

export default store;
