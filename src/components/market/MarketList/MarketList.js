import React from 'react';
import styles from './MarketList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const MarketItem = ({id,name,place,poster,period,end,reg,curGetTime,onDetail}) => {
  const marketGetTime = new Date(period).getTime();
  const gap = marketGetTime - curGetTime;
  const dDay = Math.ceil(gap/(1000*60*60*24));

  return (
    <div className={cx('market-item')} onClick={() => onDetail(id)}>
      <div className={cx('market-item-top')}>
        <div className={cx('market-dday')}>
          <p>{dDay >= 0 ? `D-${dDay}` : '종료'}</p>
        </div>
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
            <p className={cx('block-to-inline')}>{period} ~ {end}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketList = ({children,markets,curGetTime,onDetail}) => {
  const marketList = markets.map(
    (market) => {
      const {market_id, market_name, market_place, market_poster,market_period,end_date,reg_date} = market;
      return (
        <MarketItem
          key={market_id}
          id={market_id}
          name={market_name}
          place={market_place}
          poster={market_poster}
          period={market_period}
          end={end_date}
          reg={reg_date}
          curGetTime={curGetTime}
          onDetail={onDetail}
        />
      )
    }
  );
  return (
    <div className={cx('wrapper')}>
      <div>
        <div>{children}</div>
      </div>
      {marketList}
    </div>
  )
}

export default MarketList;