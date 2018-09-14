import React from 'react';
import styles from './MarketRegList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketItem = ({count,id,name,place,poster,start,end,sellerCnt,sellerLimitCnt,onDetail,curGetTime}) => {
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
          <div className={cx('item-period')}>모집기간 : {start} ~ {end}</div>
          <div className={cx('item-limit')}>모집인원 : {count} / {sellerLimitCnt}</div>
          {/* <div className={cx('item-desc')}>{desc}</div> */}
        </div>
      </div>
    </div>
    /* <div className={cx('market-item')}>
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
    </div> */
  );
};

 const MarketRegList = ({count,markets,onDetail,curGetTime,children}) => {
  if(!markets) return null; 
  const marketRegList = markets.map(
    (market) => {
      const {market_id, market_name, market_place, market_poster,start_date,end_date,seller_cnt,seller_limit_cnt} = market;
        return (
          <MarketItem
            key={market_id}
            id={market_id}
            name={market_name}
            place={market_place}
            poster={market_poster}
            start={start_date}
            end={end_date}
            sellerCnt={seller_cnt}
            sellerLimitCnt={seller_limit_cnt}
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