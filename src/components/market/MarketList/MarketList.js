import React from 'react';
import styles from './MarketList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const MarketItem = ({id,name,place,poster,period,end,onDetail}) => {

  return (
    <div className={cx('market-item')}>
      <div className={cx('market-item-top')}>
        <div className={cx('market-dday')}>
          {/* <p>{dDay >= 0 ? `D-${dDay}` : '종료'}</p> */}
        </div>
        <img src={poster}/>
      </div>
      <div className={cx('market-item-bottom')}>
        <div className={cx('bot-inner-top')}>
          <p className={cx('item-left')}>
            {name}
          </p>
          <p className={cx('item-right')}>
            {place}
          </p>
          <div className={cx('item-left')}>
            <p className={cx('block-to-inline')}>{period} ~ {end}</p>
          </div>
        </div>
        <div className={cx('bot-inner-bot')}>
          <button className={cx('reg-button')} onClick={() => onDetail(id)}>상세보기</button>
        </div>
      </div>
    </div>
  );
};

 const MarketList = ({markets,onDetail}) => {
  if(!markets) return null; 
  const marketList = markets.map(
    (market) => {
      const {market_id, market_name, market_place, market_poster,market_period,end_date} = market;
      return (
        <MarketItem
          key={market_id}
          id={market_id}
          name={market_name}
          place={market_place}
          poster={market_poster}
          period={market_period}
          end={end_date}
          onDetail={onDetail}
        />
      )
    }
  );
  return (
    <div className={cx('wrapper')}>
      <div>
        {/* <div>{children}</div> */}
      </div>
      {marketList}
    </div>
  )
}

export default MarketList;