import React from 'react';
import classNames  from 'classnames/bind';
import styles from './MyPageItemWrapper.scss';
import MyPageAppliedMarket from '../MyPageAppliedMarket/MyPageAppliedMarket';
import MyPageHostMarket from '../MyPageHostMarket';

const cx = classNames.bind(styles);

const MyPageItemWrapper = ({data}) => {
  if (!data) return null;
  // console.log(data);
  const dataDetail = data.map(
    (data,idx) => {
      const { market_poster , market_name} = data;
      // console.log(data.seller_cnt);
      // let information = data.seller_cnt >=  0? console.log('ok') : console.log('sorry');
      // console.log(information)
      let information = data.seller_cnt >= 0? <MyPageHostMarket data = {data}/>  : <MyPageAppliedMarket data = {data}/>
      return  <div className = {cx('item-wrapper')} key = {idx}>
              <div className = {cx('item-image')}><img src = {market_poster}/></div>
              <div className = {cx('item-detail')}>
                <div className = {cx('item-title')}><h1>{market_name}</h1></div>
                  {information}
              </div>
              </div>
    }
  )
  return (
    <div>
      {dataDetail}
    </div>
  )
}
export default MyPageItemWrapper;