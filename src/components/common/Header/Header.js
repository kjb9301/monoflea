import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('logo', 'space')}>
          <Link to='/'>MONOFLEA</Link>
        </div>
        <div className={cx('nav-items')}>
          <Link className={cx('nav-item')} to='/about'>소개</Link>
          <Link className={cx('nav-item')} to='/boards'>게시판</Link>
          <Link className={cx('nav-item')} to='/sellers'>셀러</Link>
          <Link className={cx('nav-item')} to='/markets'>마켓</Link>
          <Link className={cx('nav-item')} to='/classes'>원데이클래스</Link>
        </div>
        <div className={cx('space')}>
          <Button className={cx('header-button')} theme="outline">로그인</Button>
          <Button className={cx('header-button')} theme="outline">회원가입</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;