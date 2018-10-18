import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageLikeSeller.scss';

const cx = classNames.bind(styles);

const MyPageLikeSeller = ({data}) =>{
  console.log(data);
  const dataDetail = data.map (
    (data, idx) => {
      const { sellerCategory, like_cnt, sns, profile_img , user,career} = data;
      return (
              <div className = {cx('item-wrapper')} key = {idx}>
                 <div className = {cx('item-image')}><img src = {profile_img} /></div>
                  <div className = {cx('item-detail')}>
                  <div className = {cx('item-title')}><h1>{user.nickName}</h1></div>
                    <div className = {cx('detail-info-wrapper')} >
                      <div className = {cx('detail-info')}>
                        <div className = {cx('info item-category')}> 분야 : {sellerCategory.category_ko} </div>
                        <div className = {cx("info item-like_cnt")}> 좋아요 : {like_cnt} </div>
                        <div className = {cx("info item-career")}> 경력 :  {career} </div>
                        <div className = {cx("info item-sns")}> SNS :  {sns} </div>
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
}
export default MyPageLikeSeller;