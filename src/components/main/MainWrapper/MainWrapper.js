import React from 'react';
import styles from './MainWrapper.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import aboutImg from './image/about.png';
import questionImg from './image/question.png';
import sellerImg from './image/seller.png';
import hostImg from './image/host.png';
import classImg from './image/class.png';
import communityImg from './image/community.png';
import marketImg from './image/market.png';

const cx = classNames.bind(styles);

const MainWrapper = () => {
  return (
    <div className={cx('main-wrapper')}>
      <div className={cx('main-visual')}>
        <div className={cx('main-title')}>
          <h1>MONOFLEA</h1>
          <p>Building Greatness With MonoFlea<br/>We’re a team of super heroes making the most awesome MonoFlea Support System</p>
        </div>
      </div>
      <div className={cx('main-navigation-wrap')}>
        <Link to="/about" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={aboutImg}/>
            <p>About</p>
          </div>
        </Link>
        <Link to="/markets" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={marketImg}/>
            <p>플리마켓</p>
          </div>
        </Link>
        <Link to="/sellers" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={sellerImg}/>
            <p>셀러</p>
          </div>
        </Link>
        <Link to="/classes" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={classImg}/>
            <p>원데이클래스</p>
          </div>
        </Link>
        <Link to="/markets/recruitment" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={hostImg}/>
            <p>마켓등록/셀러모집</p>
          </div>
        </Link>
        <Link to="/boards" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={communityImg}/>
            <p>커뮤니티</p>
          </div>
        </Link>
        <Link to="/mypage" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={questionImg}/>
            <p>마이페이지</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainWrapper;