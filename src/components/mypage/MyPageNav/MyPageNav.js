import React from 'react';
import classNames from 'classnames/bind';
import styles from'./MyPageNav.scss';
const cx = classNames.bind(styles);

const MyPageNav = ({getData, urls, navs,seller_id, host_id, user_id }) => {
  console.log(host_id);
  console.log(seller_id);
  const list = urls.map(
    (url,idx) => {
      return <div 
                className={cx("nav")} 
                key={idx} 
                onClick={() => {
                  let id = seller_id ? seller_id : (host_id ? host_id : null);
                  getData(url, id, user_id)
                }}
              >{navs[idx]}
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