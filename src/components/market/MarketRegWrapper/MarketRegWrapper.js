import React from 'react';
import styles from './MarketRegWrapper.scss';
import classNames from 'classnames/bind';
import MarketRegListContainer from 'containers/market/MarketRegListContainer';

const cx = classNames.bind(styles);

const MarketRegWrapper = ({ userType }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('market-header')}>
      </div>
      <MarketRegListContainer />
    </div>
  );
};

export default MarketRegWrapper;