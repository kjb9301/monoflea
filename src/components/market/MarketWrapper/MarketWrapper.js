import React from 'react';
import styles from './MarketWrapper.scss';
import classNames from 'classnames/bind';
import MarketListContainer from 'containers/market/MarketListContainer';
import CalendarContainer from 'containers/market/CalendarContainer';

const cx = classNames.bind(styles);

const MarketWrapper = ({}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('market-header')}></div>
      <div className={cx('sub-header')}>Coming Soon</div>
      <MarketListContainer listType='CL'/>
      <div className={cx('sub-header')}>Market</div>
      <CalendarContainer/>
      <MarketListContainer listType='C'/>
    </div>
  );
};

export default MarketWrapper;