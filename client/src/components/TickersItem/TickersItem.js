import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { tickersSelectors } from '../../redux/tickers';
import s from './TickersItem.module.css';

const BACKGROUND_COLORS_ON_TITLES = [
  '#FED057',
  '#7f88e8',
  '#FD9498',
  '#00AD84',
  '#C5BAFF',
  '#FFD8D0',
];

const keyframe = keyframes`
from {
  transform: scale(1.2);
}

to {
  transform: scale(1);
}
`;

const StyledB = styled.b`
  animation: ${keyframe} 1s;
  display: inline-block;
`;

export default function TickersItem() {
  const tickers = useSelector(tickersSelectors.getTickers);
  const [tickerTitles, setTickerTitle] = useState([]);

  const handleOnClick = e => {
    const title = e.target.id;
    if (tickerTitles.includes(title)) {
      const filteredTitles = tickerTitles.filter(e => e !== title);
      setTickerTitle(filteredTitles);
    } else {
      setTickerTitle([...tickerTitles, title]);
    }
  };

  return (
    <>
      {tickers &&
        tickers.map(
          (
            {
              ticker,
              exchange,
              price,
              change,
              change_percent,
              dividend,
              yield: income,
              last_trade_time,
            },
            i,
          ) => {
            return tickerTitles.includes(ticker) ? (
              <li
                key={ticker}
                className={s.item}
                style={{ backgroundColor: 'grey' }}
              >
                <button type="button" id={ticker} onClick={handleOnClick}>
                  asd
                </button>
                <h2
                  className={s.title}
                  style={{
                    backgroundColor: BACKGROUND_COLORS_ON_TITLES[i],
                  }}
                >
                  {ticker}
                </h2>
                <ul className={s.listStatistics}>
                  <li className={s.itemStatistics}>{exchange}</li>
                  <li className={s.itemStatistics}>
                    price: <b key={price}>0</b>
                  </li>
                  <li className={s.itemStatistics}>
                    change: <b key={change}>0</b>
                  </li>
                  <li className={s.itemStatistics}>
                    <b key={change_percent}>0</b> %
                  </li>
                  <li className={s.itemStatistics}>
                    dividend: <b key={dividend}>0</b>
                  </li>
                  <li className={s.itemStatistics}>
                    yield: <b key={income}>0</b>
                  </li>
                  <li className={s.itemStatistics}>00.00.0000</li>
                </ul>
              </li>
            ) : (
              <li key={ticker} className={s.item}>
                <button type="button" id={ticker} onClick={handleOnClick}>
                  asd
                </button>
                <h2
                  className={s.title}
                  style={{
                    backgroundColor: BACKGROUND_COLORS_ON_TITLES[i],
                  }}
                >
                  {ticker}
                </h2>
                <ul className={s.listStatistics}>
                  <li className={s.itemStatistics}>{exchange}</li>
                  <li className={s.itemStatistics}>
                    price: <StyledB key={price}>{price}</StyledB>
                  </li>
                  <li className={s.itemStatistics}>
                    change: <StyledB key={change}>{change}</StyledB>
                  </li>
                  <li className={s.itemStatistics}>
                    <StyledB key={change_percent}>{change_percent}</StyledB> %{' '}
                    {change_percent > 0 ? (
                      <span className={s.arrowTop}>&#8657;</span>
                    ) : (
                      <span className={s.arrowBottom}>&#8659;</span>
                    )}
                  </li>
                  <li className={s.itemStatistics}>
                    dividend: <StyledB key={dividend}>{dividend}</StyledB>
                  </li>
                  <li className={s.itemStatistics}>
                    yield: <StyledB key={income}>{income}</StyledB>
                  </li>
                  <li className={s.itemStatistics}>
                    {new Date(last_trade_time).toLocaleDateString()}
                  </li>
                </ul>
              </li>
            );
          },
        )}
    </>
  );
}
