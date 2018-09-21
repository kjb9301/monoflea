import React from 'react';
import styles from './MarketList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketItem = ({listType,market_id,market_name,market_place,market_poster,start_date,end_date,onDetail,curGetTime}) => {
  const marketGetTime = new Date(start_date).getTime();
  const gap = marketGetTime - curGetTime;
  const dDay = Math.ceil(gap/(1000*60*60*24));

  return (
    <div className={cx('market-item')}>
      <div className={cx('market-item-top')}>
        <div className={cx('market-dday')}>
          <p>{dDay >= 0 ? `D-${dDay}` : '종료'}</p>
        </div>
        <img src={market_poster}/>
      </div>
      <div className={cx('market-item-bottom')}>
        <div className={cx('bot-inner-top')}>
          <p className={cx('item-left')}>
            {market_name}
          </p>
          <p className={cx('item-right')}>
            {market_place}
          </p>
          <div className={cx('item-left')}>
            <p className={cx('block-to-inline')}>{start_date} ~ {end_date}</p>
          </div>
        </div>
        <div className={cx('bot-inner-bot')}>
          <button className={cx('reg-button')} onClick={() => onDetail(market_id,listType)}>상세보기</button>
        </div>
      </div>
    </div>
  );
};

 const MarketList = ({listType,markets,onDetail,curGetTime,children}) => {
  if(!markets) return null; 
  const marketList = markets.map(
    (market,index) => {
      const {market_id, market_name, market_place, market_poster,start_date,end_date} = market;
        return (
          <MarketItem
            key={index}
            market_id={market_id}
            market_name={market_name}
            market_place={market_place}
            market_poster={market_poster}
            start_date={start_date}
            end_date={end_date}
            onDetail={onDetail}
            curGetTime={curGetTime}
            listType={listType}
          />
        )
    }
  );
  return (
    <div className={cx('wrapper')}>
      <div>----------header------------</div>
      <div>
        <div>{children}</div>
      </div>
      {marketList}
    </div>
  )
}

export default MarketList;