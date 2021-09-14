import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { tickersSelectors } from '../../redux/tickers';
import s from './TickersList.module.css';

export default function TickersList() {
  const tickers = useSelector(tickersSelectors.getTickers);

  const keyframe = keyframes`
  from {
    transform: scale(1.2);
  }

  to {
    transform: scale(1);
  }
`;

  const Item = styled.b`
    animation: ${keyframe} 1s;
    display: inline-block;
  `;

  return (
    <ul className={s.list}>
      {tickers &&
        tickers.map(
          ({
            ticker,
            exchange,
            price,
            change,
            change_percent,
            dividend,
            yield: income,
            last_trade_time,
          }) => (
            <li key={ticker} className={s.item}>
              <h2
                className={s.title}
                style={{
                  backgroundColor: randomColor(),
                }}
              >
                {ticker}
              </h2>
              <ul>
                <li>{exchange}</li>
                <li>
                  price: <Item>{price}</Item>
                </li>
                <li>change: {change}</li>
                <li>
                  {change_percent} %{' '}
                  {change_percent > 0 ? (
                    <span>&#8657;</span>
                  ) : (
                    <span>&#8659;</span>
                  )}
                </li>
                <li>dividend: {dividend}</li>
                <li>yield: {income}</li>
                <li>{new Date(last_trade_time).toLocaleDateString()}</li>
              </ul>
            </li>
          ),
        )}
    </ul>
  );
}

function randomColor() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}
