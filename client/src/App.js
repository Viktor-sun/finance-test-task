import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TickersList from './components/TickersList';
import { tickersOperations } from './redux/tickers';

function App() {
  const despatch = useDispatch();

  useEffect(() => {
    despatch(tickersOperations.fetchTickers());
  }, [despatch]);

  return (
    <div className="App">
      <TickersList />
    </div>
  );
}

export default App;
