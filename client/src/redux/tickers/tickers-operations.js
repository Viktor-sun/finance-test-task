import tickersActions from './tickers-actions';
import socket from '../../services/socket';

const fetchTickers = () => async dispatch => {
  dispatch(tickersActions.tickersRequest());

  socket.emit('start');
  socket.on('ticker', tickers =>
    dispatch(tickersActions.tickersSuccess(tickers)),
  );

  socket.on('connect_error', () =>
    dispatch(tickersActions.tickersError('connect_error')),
  );
  socket.on('connect_failed', () =>
    dispatch(tickersActions.tickersError('connect_failed')),
  );
  socket.on('disconnect', () =>
    dispatch(tickersActions.tickersError('disconnect')),
  );
};

const fetchInterval = () => async dispatch => {
  dispatch(tickersActions.intervalRequest());

  socket.on('interval', interval =>
    dispatch(tickersActions.intervalSuccess(interval)),
  );
};

// eslint-disable-next-line
export default { fetchTickers, fetchInterval };
