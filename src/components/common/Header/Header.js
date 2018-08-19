import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      헤더
    </header>
  );
};

export default Header;