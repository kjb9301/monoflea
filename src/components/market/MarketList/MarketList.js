import React, { Component } from 'react';
import styles from './MarketList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketItem = ({listType,market_id,market_name,market_place,market_poster,start_date,end_date,onDetail,curGetTime}) => {
  const marketGetTime = new Date(start_date).getTime();
  const gap = marketGetTime - curGetTime;
  const dDay = Math.ceil(gap/(1000*60*60*24));

  return (
    <div className={cx('item-box')} onClick={() => onDetail(market_id,listType)}>
      <div className={cx('item-poster')}>
        <img src={market_poster} alt={market_name}/>
        <div className={cx('cover')}></div>
        <div className={cx('item-content')}>
          <div className={cx('item-desc')}>
            <div className={cx('item-name')}>
              {market_name}
            </div>
            <div className={cx('item-dDay')}>
              {dDay >= 0 ? `D-${dDay}` : '종료'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


class MarketList extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   const {listType,markets} = this.props;
  //   if(listType === 'CL' && markets.marketComingList.length === nextProps.markets.length){
  //     return false;
  //   }
  //   return true;         
  // }

  render() {
    const {listType,markets,onDetail,curGetTime,children} = this.props;
    const class_name = (listType === 'L'? 'marketList' : 'marketComingList');
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
        <div className={cx('market-subheader')}>
          <div className={cx('subheader-title')}>{listType === 'L'? 'MARKETLIST' : 'COMING SOON'}</div>
          <div className={cx('children-wrapper')}>
            {children}
          </div>
        </div>
        <div className={cx(class_name)}>
          {marketList}
        </div>
      </div>
    )
  }
}

export default MarketList;