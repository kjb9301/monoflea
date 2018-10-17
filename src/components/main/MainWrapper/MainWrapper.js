import React from 'react';
import styles from './MainWrapper.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { TiBusinessCard, TiMessages, TiWarningOutline } from 'react-icons/ti';
import { MdEventNote, MdAccountBox, MdAddBox, MdContentPaste } from 'react-icons/md';

const cx = classNames.bind(styles);

const MainWrapper = () => {
  return (
    <div className={cx('main-wrapper')}>
      <div className={cx('main-visual')}>
        <div className={cx('main-title')}>
          <h1>MONOFLEA</h1>
          {/* <p>Building Greatness With MonoFlea<br/>We’re a team of super heroes making the most awesome MonoFlea Support System</p> */}
        </div>
      </div>
      <div className={cx('main-navigation-wrap')}>
        <Link to="/about" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <TiWarningOutline style={{ 'fontSize': '50px', 'color': 'white' }}/>
            <p>About</p>
          </div>
        </Link>
        <Link to="/markets" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <MdEventNote style={{ 'fontSize': '50px', 'color': 'white' }}/>
            <p>플리마켓</p>
          </div>
        </Link>
        <Link to="/sellers" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <MdAccountBox style={{ 'fontSize': '50px', 'color': 'white' }}/>
            <p>셀러</p>
          </div>
        </Link>
        <Link to="/classes" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <MdContentPaste style={{ 'fontSize': '50px', 'color': 'white' }}/>
            <p>원데이클래스</p>
          </div>
        </Link>
        <Link to="/markets/recruitment" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <MdAddBox style={{ 'fontSize': '50px', 'color': 'white' }}/>
            <p>마켓등록/셀러모집</p>
          </div>
        </Link>
        <Link to="/boards" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <TiMessages style={{ 'fontSize': '50px', 'color': 'white' }}/>
            <p>커뮤니티</p>
          </div>
        </Link>
        <Link to="/mypage" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <TiBusinessCard style={{ 'fontSize': '50px', 'color': 'white' }}/>
            <p>마이페이지</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainWrapper;