import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageHostClass.scss';

const cx = classNames.bind(styles);

const MyPageHostClass = ({data})=>{
    const { class_limit_cnt, class_place, class_reg_cnt, event_date,
          taken_cnt, recruit_start_date, recruit_end_date, seller } = data;
    const { user } = seller;
    console.log('good');
    return (
      <div className = {cx('detail-info-wrapper')} >
        <div className = {cx('detail-info')}>
          <div className = {cx('info item-date')}> 개설날짜 : {event_date}</div>
          <div className = {cx("info item-taken")}> 인기도 :  {taken_cnt} </div>
          <div className = {cx("info item-seller_cnt")}> 모집현황 : {class_reg_cnt} / {class_limit_cnt} </div>
        </div>
        <div className = {cx("status-wrapper")}>
            <div className = {cx("detailBtn")} >신청자리스트</div>
        </div> 
      </div>
    );

}
export default MyPageHostClass;
