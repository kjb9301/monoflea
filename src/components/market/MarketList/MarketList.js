import React from 'react';
import styles from './MarketList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const MarketItem = ({name,place,poster,period,end,reg}) => {
  return (
    <div className={cx('market-item')}>
      <div className={cx('market-item-top')}>
        <p>{poster}</p>
      </div>
      <div className={cx('market-item-bottom')}>
        <div className={cx('bot-inner-top')}>
          <p className={cx('item-left')}>
            {name}
          </p>
          <p className={cx('item-right')}>
            {place}
          </p>
        </div>
        <div className={cx('bot-inner-bot')}>
          <div className={cx('item-left')}>
            <p className={cx('block-to-inline')}>{period}</p>
            <p className={cx('block-to-inline')}>{end}</p>
          </div>
          <p className={cx('item-right')}>
            {reg}
          </p>
        </div>
      </div>
    </div>
  );
};

const MarketList = ({children,markets}) => {
  const marketList = markets.map(
    (market) => {
      const {market_id, market_name, market_place, market_poster,market_period,end_date,reg_date} = market;
      return (
        <MarketItem
          key={market_id}
          name={market_name}
          place={market_place}
          poster={market_poster}
          period={market_period}
          end={end_date}
          reg={reg_date}
        />
      )
    }
  );
  return (
    <div className={cx('wrapper')}>
      <div>
        {children}
      </div>
      {marketList}
    </div>
  )
}

export default MarketList;