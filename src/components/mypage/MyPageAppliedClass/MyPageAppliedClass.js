import React from 'react'
import classNames from 'classnames/bind';
import styles from './MyPageAppliedClass.scss';

const cx = classNames.bind(styles);
const MyPageAppliedClass = ({data}) => {
  // data내용
  const { class_limit_cnt, class_place, class_reg_cnt, event_date,
         taken_cnt, recruit_start_date, recruit_end_date, seller } = data;
  const { user } = seller;
  return (
    <div className = {cx('detail-info-wrapper')} >
      <div className = {cx('detail-info')}>
        <div className = {cx("info item-reg")}> 모집기간 : {recruit_start_date} ~ {recruit_end_date}</div>
        <div className = {cx('info item-date')}> 개설날짜 : {event_date}</div>
        <div className = {cx("info item-host")}> 주최자 :  {user.nickName} </div>
        <div className = {cx("info item-taken")}> 인기도 :  {taken_cnt} </div>
        <div className = {cx("info item-market_place")}> 장소 : {class_place}</div>
        <div className = {cx("info item-seller_cnt")}> 모집현황 : {class_reg_cnt} / {class_limit_cnt} </div>
      </div>
      <div className = {cx("status-wrapper")}>
          <div className = {cx("apply-stauts")}> 신청상태 : { } </div>
          <div className = {cx("detailBtn")} > 지도 </div>
      </div> 
    </div>
  );
}
export default MyPageAppliedClass;