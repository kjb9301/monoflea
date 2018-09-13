import React from 'react';
import styles from './MarketList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketItem = ({id,name,place,poster,start,end,onDetail,curGetTime}) => {
  const marketGetTime = new Date(start).getTime();
  const gap = marketGetTime - curGetTime;
  const dDay = Math.ceil(gap/(1000*60*60*24));

  return (
    <div className={cx('market-item')}>
      <div className={cx('market-item-top')}>
        <div className={cx('market-dday')}>
          <p>{dDay >= 0 ? `D-${dDay}` : '종료'}</p>
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
            <p className={cx('block-to-inline')}>{start} ~ {end}</p>
          </div>
        </div>
        <div className={cx('bot-inner-bot')}>
          <button className={cx('reg-button')} onClick={() => onDetail(id)}>상세보기</button>
        </div>
      </div>
    </div>
  );
};

 const MarketList = ({markets,onDetail,curGetTime,children}) => {
  if(!markets) return null; 
  const marketList = markets.map(
    (market) => {
      const {market_id, market_name, market_place, market_poster,start_date,end_date,confirmYN} = market;
        return (
          <MarketItem
            key={market_id}
            id={market_id}
            name={market_name}
            place={market_place}
            poster={market_poster}
            start={start_date}
            end={end_date}
            onDetail={onDetail}
            curGetTime={curGetTime}
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