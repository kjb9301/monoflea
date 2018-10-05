import React from 'react';
import classNames from 'classnames/bind';
import styles from'./MyPageNav.scss';
const cx = classNames.bind(styles);

const MyPageNav = ({getData, urls, navs }) => {
  const list = urls.map(
    (url,idx) => {
      return <div className= {cx("nav")} key = {idx} onClick = {() => getData(url)}> {navs[idx]}</div>
    }
  )
  return (
    <div className = {cx("nav-bar")}>
        {list}
    </div>
  )
}
export default MyPageNav;