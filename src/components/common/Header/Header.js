import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link, NavLink, withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = ({ onLoginClick, onLogout, isLogin, userName, match, onSignupClick }) => {
  
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
            <Link className={cx('nav-item')} to='/boards'>게시판</Link>
            <Link className={cx('nav-item')} to='/sellers'>셀러</Link>
            {/* <button className={cx('dropbtn')}>마켓</button> */}
            <div className={cx('nav-item', 'nav-item-market')}>
              <span>마켓</span>
              <div className={cx('nav-subitem')}>
                  <div><Link to='/markets'>일정</Link></div>
                  <div><Link to='/markets/recruitment'>등록</Link></div>
              </div>
            </div>
            <Link className={cx('nav-item')} to='/classes'>원데이클래스</Link>
          </div>
        }
        {/* <div className={cx('space')}> */}
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
        {/*</div> */}
      </div>
    </header>
  );
};

export default withRouter(Header);