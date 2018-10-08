import React from 'react';
import classNames  from 'classnames/bind';
import styles from './MyPageItemWrapper.scss';
import MyPageAppliedMarket from '../MyPageAppliedMarket/MyPageAppliedMarket';

const cx = classNames.bind(styles);

const MyPageItemWrapper = ({data}) => {
  console.log(data);
  // const dataDetail = data.map(
  //   (data) => {
  //     // const { end_date, start_date, host, market_name, market_place,
  //     //         market_poster, reg_end_date, reg_start_date} = data
  //     const { market_poster , market_name} = data;
  //     return  <div className = {cx('item-wrapper')}>
  //             <div className = {cx('item-image')}>{market_poster}</div>
  //             <div className = {cx('item-detail')}>
  //               <div className = {cx('item-title')}><h1>{market_name}</h1></div>
  //               {/* <div className = {cx('detail-info-wrapper')}>
              
  //               </div> */}
  //               <MyPageAppliedMarket data = {data}/>
  //             </div>
  //             </div>
  //   }
  // )
  return (
    <div>
      123
    </div>
  )
}
export default MyPageItemWrapper;