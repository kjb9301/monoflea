import React from 'react';
import styles from './MarketRegList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketItem = ({id,name,place,poster,start,end,sellerCnt,sellerLimitCnt,regStart,regEnd,onDetail,curGetTime}) => {
  const marketGetTime = new Date(start).getTime();
  const gap = marketGetTime - curGetTime;
  const dDay = Math.ceil(gap/(1000*60*60*24));
  return (
    <div className={cx('item-boxframe')} onClick={() => onDetail(id)}>
      <div className={cx('item-box')}>
        <div className={cx('item-posterframe')}>
          <div className={cx('item-poster')}><img src={poster} /></div>
        </div>
        
        <div className={cx('item-contents')}>
          <div className={cx('item-period')}>모집기간 : {regStart} ~ {regEnd}</div>
          <div className={cx('item-limit')}>모집인원 : {sellerCnt} / {sellerLimitCnt}</div>
        </div>
      </div>
    </div>
  );
};

 const MarketRegList = ({count,markets,onDetail,curGetTime,children}) => {
  if(!markets) return null; 
  const marketRegList = markets.map(
    (market,index) => {
      const {market_id, market_name, market_place, market_poster,start_date,end_date,seller_cnt,seller_limit_cnt,reg_start_date,reg_end_date} = market;
        return (
          <MarketItem
            key={index}
            id={market_id}
            name={market_name}
            place={market_place}
            poster={market_poster}
            start={start_date}
            end={end_date}
            sellerCnt={seller_cnt}
            sellerLimitCnt={seller_limit_cnt}
            regStart={reg_start_date}
            regEnd={reg_end_date}
            onDetail={onDetail}
            curGetTime={curGetTime}
            count={count}
          />
        )
    }
  );
  return (
    <div className={cx('wrapper')}>
      <div>
        <div>{children}</div>
      </div>
      {marketRegList}
    </div>
  )
}

export default MarketRegList;