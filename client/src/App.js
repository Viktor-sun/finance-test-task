import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TickersList from './components/TickersList';
import Container from './components/Container';
import { tickersOperations } from './redux/tickers';

function App() {
  const despatch = useDispatch();

  useEffect(() => {
    despatch(tickersOperations.fetchTickers());
  }, [despatch]);

  return (
    <>
      <Container>
        <TickersList />
      </Container>
    </>
  );
}

export default App;
