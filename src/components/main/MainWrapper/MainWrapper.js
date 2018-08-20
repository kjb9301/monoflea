import React from 'react';
import styles from './MainWrapper.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';

const cx = classNames.bind(styles);

const MainWrapper = () => {
  return (
    <div className={cx('main-wrapper')}>
      <Header />
      <div className={cx('main-background')}>
      </div>
    </div>
  );
};

export default MainWrapper;