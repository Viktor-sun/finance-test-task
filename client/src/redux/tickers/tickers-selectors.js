const getTickers = state => state.tickers.fetchedTickers;
const getError = state => state.tickers.error;
const isLoading = state => state.tickers.loading;

// eslint-disable-next-line
export default { getTickers, getError, isLoading };
