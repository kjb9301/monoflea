import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageAppliedMarket.scss';

const cx = classNames.bind(styles);

const MyPageAppliedMarket = ({data}) => {
  console.log(data);
  if (!data) return null;
  const { start_date, end_date, host, 
                market_place, reg_end_date, reg_start_date} = data;

  // const dataDetail = data.map(
  //   (data,idx) => {
  //    
  //     return  <div className = {cx('detail-info-wrapper')} key = {idx}>
  //               <div className = {cx('detail-info')}>
  //                 <div className = {cx('item-date')}>개설날짜 : {start_date} ~ {end_date}</div>
  //                 <div className = {cx("item-reg")}> 모집기간 : {reg_start_date} ~ {reg_end_date}</div>
  //                 <div className = {cx("item-host")}>주최자 :  {host} </div>
  //                 <div className = {cx("item-market_place")}>장소 : {market_place}</div>
  //               </div>
  //             </div>
      
  //   }
  // )
  return (
    <div className = {cx('detail-info-wrapper')} >
      <div className = {cx('detail-info')}>
        <div className = {cx('info item-date')}>개설날짜 : {start_date} ~ {end_date}</div>
        <div className = {cx("info item-reg")}> 모집기간 : {reg_start_date} ~ {reg_end_date}</div>
        <div className = {cx("info item-host")}>주최자 :  {host.user.nickName} </div>
        <div className = {cx("info item-market_place")}>장소 : {market_place}</div>
      </div>
      <div className = {cx("status-wrapper")}>
          <div className = {cx("apply-stauts")}> 신청상태 : { } </div>
          <div className = {cx("detailBtn")} >지도</div>
      </div> 
  </div>
  
  )
}

export default MyPageAppliedMarket;