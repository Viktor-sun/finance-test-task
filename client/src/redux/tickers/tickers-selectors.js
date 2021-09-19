const getTickers = state => state.tickers.fetchedTickers;
const getError = state => state.tickers.error;
const isLoading = state => state.tickers.loading;
const getInterval = state => state.tickers.fetchedInterval;
const getTickersOff = state => state.tickers.fetchedTickersOff;

// eslint-disable-next-line
export default { getTickers, getError, isLoading, getInterval, getTickersOff };
