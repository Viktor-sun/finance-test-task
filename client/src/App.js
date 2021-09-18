import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TickersList from './components/TickersList';
import Container from './components/Container';
import Spinner from './components/Spinner';
import FormOnChangeInterval from './components/FormOnChangeInterval';
import { tickersOperations, tickersSelectors } from './redux/tickers';

function App() {
  const dispatch = useDispatch();
  const isLiading = useSelector(tickersSelectors.isLoading);

  useEffect(() => {
    dispatch(tickersOperations.fetchTickers());
  }, [dispatch]);

  return (
    <>
      <Spinner isHidden={isLiading} />
      <Container>
        <FormOnChangeInterval />
        <TickersList />
      </Container>
    </>
  );
}

export default App;
