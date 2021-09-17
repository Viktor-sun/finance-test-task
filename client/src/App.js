import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TickersList from './components/TickersList';
import Container from './components/Container';
import FormOnChangeInterval from './components/FormOnChangeInterval';
import { tickersOperations } from './redux/tickers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tickersOperations.fetchTickers());
  }, [dispatch]);

  return (
    <>
      <Container>
        <FormOnChangeInterval />
        <TickersList />
      </Container>
    </>
  );
}

export default App;
