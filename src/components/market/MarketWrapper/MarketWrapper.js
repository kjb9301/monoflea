import React from 'react';
import styles from './MarketWrapper.scss';
import classNames from 'classnames/bind';
import MarketListContainer from 'containers/market/MarketListContainer';
import CalendarContainer from 'containers/market/CalendarContainer';

const cx = classNames.bind(styles);

const MarketWrapper = ({}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('market-header')}>
        <h1 className={cx('market-title')}><span>Market<br/></span><span className={cx('market-subtitle')}>Information</span><br/><span className={cx('market-title-name')}>마켓일정</span></h1>
        <p className={cx('market-description')}>"<strong>모/노/플/리</strong>에서 전국의 모든 플리마켓 정보를 알려드립니다.<br/> 가장 가까운 플리마켓에 참여 하셔서 문화와 공유의 시간을 즐겨보세요."</p>
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