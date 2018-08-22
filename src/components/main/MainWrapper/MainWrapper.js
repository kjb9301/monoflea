import React from 'react';
import styles from './MainWrapper.scss';
import classNames from 'classnames/bind';
import HeaderContainer from 'containers/common/HeaderContainer';

const cx = classNames.bind(styles);

const MainWrapper = () => {
  return (
    <div className={cx('main-wrapper')}>
      <HeaderContainer />
      <div className={cx('main-background')}>
      </div>
    </div>
  );
};

export default MainWrapper;