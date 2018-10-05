import React, {Fragment} from 'react';
import styles from './MarketList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketItem = ({listType,market_id,market_name,market_place,market_poster,start_date,end_date,onDetail,curGetTime}) => {
  const marketGetTime = new Date(start_date).getTime();
  const gap = marketGetTime - curGetTime;
  const dDay = Math.ceil(gap/(1000*60*60*24));

  return (
    <div className={cx('item-boxframe')} onClick={() => onDetail(market_id,listType)}>
      <div className={cx('item-box')}>
        <div className={cx('item-posterframe')}>
          <div className={cx('item-dDay')}>
            {dDay >= 0 ? `D-${dDay}` : '종료'}
          </div>
          <div className={cx('item-poster')}><img src={market_poster} alt={market_name}/></div>
        </div>
        <div className={cx('item-contents')}>
          <div className={cx('item-name')}>{market_name}</div>
        </div>
      </div>
    </div>
  );
};

 const MarketList = ({listType,markets,isSelectedByDate,onDetail,curGetTime,children,onSelectByDate}) => {
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
      <div className={cx('sub-header')}>
        {listType === 'CL' ? 'Coming Soon' : 'Market'}
      </div>
        <div className={cx('btn-space')}>
          <div onClick={onSelectByDate}>{isSelectedByDate?'전체':'날짜별'}</div>
        </div>
          {isSelectedByDate?
            <div>{children}</div>
            :
            <Fragment/>
          }
      <div className={cx('market-list-wrap')}>
        {marketList}
      </div>
    </div>
  )
}

export default MarketList;