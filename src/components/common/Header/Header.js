import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link, withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = ({ onLoginClick, onLogout, isLogin, userName, userType, match, onSignupClick }) => {
  const { path } = match;
  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('menu-icon')}>☰</div>
        <div className={cx('logo')}>
          <Link className={cx('logo-text')} to='/'>MONOFLEA</Link>
        </div>
        {
          path === '/' ? <div className={cx('nav-items')}></div> :
          <div className={cx('nav-items')}>
            <Link className={cx('nav-item')} to='/about'>소개</Link>
            <Link className={cx('nav-item')} to='/markets'>마켓일정</Link>
            <Link className={cx('nav-item')} to='/sellers'>셀러</Link>
            <Link className={cx('nav-item')} to='/classes'>원데이클래스</Link>
            {
            userType === 'S' || userType === 'H' ?
            <Link className={cx('nav-item')}to='/markets/recruitment'>마켓등록/셀러모집</Link> :
            <div></div>
            }
            <Link className={cx('nav-item')} to='/boards'>커뮤니티</Link>         
          </div>
        }
          {
            isLogin && userName ? 
            <div  className={cx('header-login')}>
              <div className={cx('header-button')}>
                {userName}
              </div>
              <div className={cx('header-button')} onClick={onLogout}>
                로그아웃
              </div>
            </div> : 
            <div className={cx('header-login')}>
              <div className={cx('header-button')} onClick={onLoginClick}>로그인</div>
              <div className={cx('header-button')} onClick={onSignupClick}>회원가입</div>            
            </div>
          }
      </div>
    </header>
  );
};

export default withRouter(Header);