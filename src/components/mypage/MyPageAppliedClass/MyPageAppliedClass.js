import React from 'react'
import classNames from 'classnames/bind';
import styles from './MyPageAppliedClass.scss';

const cx = classNames.bind(styles);
const MyPageAppliedClass = ({data}) => {
  // data내용
  return (
    <div className = {cx('detail-info-wrapper')} >
      <div className = {cx('detail-info')}>
        <div className = {cx('info item-date')}>개설날짜 : {start_date} ~ {end_date}</div>
        <div className = {cx("info item-reg")}> 모집기간 : {reg_start_date} ~ {reg_end_date}</div>
        <div className = {cx("info item-host")}>주최자 :  {host.host_id} </div>
        <div className = {cx("info item-market_place")}>장소 : {market_place}</div>
        <div className = {cx("info item-seller_cnt")}> 모집현황 : {seller_cnt} / {seller_limit_cnt} </div>
      </div>
      <div className = {cx("status-wrapper")}>
          <div className = {cx("apply-stauts")}> 신청상태 : { } </div>
          <div className = {cx("detailBtn")} >지도</div>
      </div> 
  </div>
  );
}
export default MyPageAppliedClass;