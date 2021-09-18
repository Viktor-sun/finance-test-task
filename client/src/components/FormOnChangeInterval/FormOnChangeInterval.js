import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import socket from '../../services/socket';
import notifications from '../../services/react-toastify';
import { tickersSelectors } from '../../redux/tickers';
import s from './FormOnChangeInterval.module.css';

export default function FormOnChangeInterval() {
  const interval = useSelector(tickersSelectors.getInterval);
  const [currentInterval, setCurrentInterval] = useState(0);
  const handleChangeInterval = e => setCurrentInterval(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('changeInterval', currentInterval * 1000);
    notifications.sucess('interval updated');
    reset();
  };

  const reset = () => setCurrentInterval(0);

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>
          Current interval: {interval && interval / 1000} sec
        </h2>
        <button type="submit" className={s.button}>
          change interval update
        </button>
        <input
          className={s.input}
          type="number"
          placeholder="enter new interval"
          name="interval"
          onChange={handleChangeInterval}
          value={currentInterval}
          autoComplete="off"
          min="1"
          max="10"
        />

        <span>seс</span>
      </form>
    </div>
  );
}
