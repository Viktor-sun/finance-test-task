import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tickersOperations } from './redux/tickers';
import { tickersSelectors } from './redux/tickers';

function App() {
  const despatch = useDispatch();
  const tickers = useSelector(tickersSelectors.getTickers);

  useEffect(() => {
    despatch(tickersOperations.fetchTickers());
  }, [despatch]);
  console.log(tickers);
  return <div className="App"></div>;
}

export default App;
