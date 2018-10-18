import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageTakenClass.scss';

const cx = classNames.bind(styles);

const MyPageTakenClass = ({data}) => {
  console.log(data);
  const dataDetail = data.map (
    (data, idx) => {
      
  const { class_limit_cnt, class_place, class_reg_cnt, event_date,
          taken_cnt, recruit_start_date, recruit_end_date, seller,class_name } = data;
  const { user, profile_img } = seller;
      return (
              <div className = {cx('item-wrapper')} key = {idx}>
                 <div className = {cx('item-image')}><img src = {profile_img} /></div>
                  <div className = {cx('item-detail')}>
                  <div className = {cx('item-title')}><h1>{class_name}</h1></div>
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
                        <div className = {cx("detailBtn")} >상세정보 </div>
                      </div> 
                    </div>
                </div>
              </div>
      )
    }
  )
  return (
    <div>
      {dataDetail}
    </div>
  )
  return  (
    <div className = {cx('detail-info-wrapper')} >
      
    </div>
  );
}
export default MyPageTakenClass;