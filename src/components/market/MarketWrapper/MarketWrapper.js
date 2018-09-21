import React from 'react';
import styles from './MarketWrapper.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import MarketListContainer from 'containers/market/MarketListContainer';

const cx = classNames.bind(styles);

const MarketWrapper = ({ userType }) => {
  return (
    <div className={cx('wrapper')}>

      <div className={cx('market-header')}>

      </div>
      <MarketListContainer />
    </div>
  );
};

export default MarketWrapper;