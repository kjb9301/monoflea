import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link, withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = ({ onLoginClick, logged, nickName, match }) => {
  const { path } = match;
  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('logo', 'space')}>
          <Link className={cx('logo-text')} to='/'>MonoFlea</Link>
        </div>
        {
          path === '/' ? <div className={cx('nav-items')}></div> :
          <div className={cx('nav-items')}>
            <Link className={cx('nav-item')} to='/about'>소개</Link>
            <Link className={cx('nav-item')} to='/notices'>게시판</Link>
            <Link className={cx('nav-item')} to='/sellers'>셀러</Link>
            <Link className={cx('nav-item')} to='/markets'>마켓</Link>
            <Link className={cx('nav-item')} to='/classes'>원데이클래스</Link>
          </div>
        }
        <div className={cx('space')}>
          {
            localStorage.nickName ? 
            <div className={cx('header-button')}>
              {localStorage.nickName}
            </div> : 
            <div>
              <div className={cx('header-button')} onClick={onLoginClick}>로그인</div>
              <div className={cx('header-button')}>회원가입</div>            
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);