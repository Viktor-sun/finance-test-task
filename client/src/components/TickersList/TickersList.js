import React from 'react';
import TickersItem from '../TickersItem';
import s from './TickersList.module.css';

export default function TickersList() {
  return (
    <ul className={s.list}>
      <TickersItem />
    </ul>
  );
}
