import React from 'react';
import styles from './MarketRegList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketItem = ({id,name,place,poster,start,end,sellerCnt,sellerLimitCnt,regStart,regEnd,onDetail,curGetTime}) => {
  // const getTime_start = new Date(regStart).getTime();
  // const getTime_end = new Date(regEnd).getTime();
  // const gap = getTime_end - getTime_start;
  // const recruit_period = Math.ceil(gap/(1000*60*60*24));
  return (
    <div className={cx('item-box')} onClick={() => onDetail(id)}>
      <div className={cx('item-poster')}>
        <img src={poster} alt={name}/>
        <div className={cx('item-content')}>
          <div><span>모집기간 :</span><span>{regStart} ~ {regEnd}</span></div>
          <div><span>모집인원 : {sellerCnt} &nbsp;/&nbsp; {sellerLimitCnt}</span></div>
        </div>
      </div>
      
      {/* <div className={cx('item-content')}>
        <div className={cx('item-period')}><span>모집기간</span> {regStart} ~ {regEnd}</div>
        <div className={cx('item-limit')}><span>모집인원</span> {sellerCnt} &nbsp;/&nbsp; {sellerLimitCnt}</div>
      </div> */}
    </div>
  );
};

 const MarketRegList = ({markets,onDetail,curGetTime}) => {
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
          />
        )
    }
  );
  return (
    <div className={cx('wrapper')}>
      <div className={cx('marketRegList')}>{marketRegList}</div>
    </div>
  )
}

export default MarketRegList;