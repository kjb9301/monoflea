import React from 'react';
import classNames from 'classnames/bind';
import styles from'./MyPageNav.scss';
const cx = classNames.bind(styles);

const MyPageNav = ({getData,  navs,seller_id, host_id, user_id, selectedURL }) => {
  const list = navs.map(
    (url,idx) => {
      const {navs, urls} =  url;
      const selected = selectedURL === urls? true : false;
      return <div 
                className={cx("nav",{selected:selected})} 
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