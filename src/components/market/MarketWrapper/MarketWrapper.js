import React from 'react';
import styles from './MarketWrapper.scss';
import classNames from 'classnames/bind';
import MarketListContainer from 'containers/market/MarketListContainer';

const cx = classNames.bind(styles);

const MarketWrapper = ({}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('market-header')}>
        <div className={cx('market-title')}>플리마켓 일정 
        <p className = {cx('market-sub')}><br/> "모노플리에서 전국의 모든 플리마켓 정보를 알려드립니다. 가장 가까운 플리마켓에 참여 하셔서 문화와 공유의 시간을 즐겨보세요."</p>
        </div>
        
      </div>
      <div>
        <MarketListContainer />
      </div>
    </div>   




    // <div className={cx('wrapper')}>
    //   <div className={cx('market-header')}>
        
    //   </div>
    //   <MarketListContainer />
    // </div>
  );
};

export default MarketWrapper;