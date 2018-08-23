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
      <div className={cx('main-background')}>
      </div>
      <div className={cx('main-navigation-wrap')}>
        <Link to="/about" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={aboutImg}/>
            <p>About</p>
          </div>
        </Link>
        <Link to="/sellers" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={sellerImg}/>
            <p>셀러</p>
          </div>
        </Link>
        <Link to="/hosts" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={hostImg}/>
            <p>주최사</p>
          </div>
        </Link>
        <Link to="/classes" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={classImg}/>
            <p>원데이클래스</p>
          </div>
        </Link>
        <Link to="/notices" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={communityImg}/>
            <p>커뮤니티</p>
          </div>
        </Link>
        <Link to="/markets" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={marketImg}/>
            <p>플리마켓</p>
          </div>
        </Link>
        <Link to="/questions" className={cx('main-nav')}>
          <div className={cx('nav-wrap')}>
            <img src={questionImg}/>
            <p>QnA</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainWrapper;