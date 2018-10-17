import React from 'react';
import classNames from 'classnames/bind';
import styles from'./MyPageNav.scss';
const cx = classNames.bind(styles);

const MyPageNav = ({getData,  navs,seller_id, host_id, user_id }) => {
  const list = navs.map(
    (url,idx) => {
      const {navs, urls} =  url;
      return <div 
                className={cx("nav")} 
                key={idx} 
                onClick={() => {
                  let id = seller_id ? seller_id : (host_id ? host_id : null);
                  getData(urls, id, user_id)
                }}
              >{navs}
              </div>
    }
  )
  return (
    <div className = {cx("nav-bar")}>
        {list}
    </div>
  )
}
export default MyPageNav;