import React from 'react';
import styles from './MarketRegButton.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const MarketRegButton = () => {
  return (
    <div className={cx('button-space')}>
      <Link className={cx('reg-button')} to="/markets/post">마켓등록</Link>
    </div>
  );
};

export default MarketRegButton;