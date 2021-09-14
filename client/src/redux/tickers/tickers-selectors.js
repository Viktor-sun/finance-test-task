const getTickers = state => state.tickers.fetchedTickers;
const getError = state => state.tickers.error;

// eslint-disable-next-line
export default { getTickers, getError };
