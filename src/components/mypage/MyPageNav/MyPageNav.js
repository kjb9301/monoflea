import React from 'react';
import classNames from 'classnames/bind';
import styles from'./MyPageNav.scss';
import {Link} from 'react-router-dom';
const cx = classNames.bind(styles);

const MyPageNav = () => {
  return (
    <div className = {cx("nav-bar")}>
        <div className= {cx("nav")}>프로필</div>
        <div className= {cx("nav")}>주최마켓</div>
        <div className= {cx("nav")}>주최클래스</div>
        <Link className= {cx("nav")} to = '/applied-market'>신청마켓</Link>
        <div className= {cx("nav")}>신청클래스</div>
        <div className= {cx("nav")}>알림</div>
    </div>
  )
}
export default MyPageNav;