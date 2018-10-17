import React from 'react';
import classNames  from 'classnames/bind';
import styles from './MyPageItemWrapper.scss';
import MyPageAppliedMarket from '../MyPageAppliedMarket/MyPageAppliedMarket';
import MyPageHostMarket from '../MyPageHostMarket';
import MyPageAppliedClass from '../MyPageAppliedClass';
import MyPageHostClass from '../MyPageHostClass/MyPageHostClass';
const cx = classNames.bind(styles);

const MyPageItemWrapper = ({data}) => { 
  if (!data) return null;
  console.log(data);
  
  const dataDetail = data.map(
    (data,idx) => {
      const { market_poster,seller,onedayRegs,market_name} = data;
      const whoRu = data.class_name === undefined ? 'market' : 'seller';
      let information = '';
      // let information = whoRu === 'seller' 
      //     ? onedayRegs !== undefined  ? <MyPageAppliedClass data = {data}/> : <MyPageHostClass data = {data}/>
      //     : data.seller_cnt >= 0 ? <MyPageHostMarket data = {data}/>  : <MyPageAppliedMarket data = {data}/> 
      
      if(whoRu === 'seller') {
        if(onedayRegs !==undefined) {
          information = <MyPageAppliedClass data = {data}/>
        }else {
          information = <MyPageHostClass data = {data}/>
        }
      }else {
        if(data.seller_cnt >= 0) {
          information = <MyPageHostMarket data = {data}/>
        }else {
          information = <MyPageAppliedMarket data = {data}/>
        }
      }
      return (
        <div key = {idx} >
        {
          whoRu !== 'seller' ? 
          <div className = {cx('item-wrapper')} key = {idx}>
             <div className = {cx('item-image')}><img src = {market_poster} /></div>
              <div className = {cx('item-detail')}>
              <div className = {cx('item-title')}><h1>{market_name}</h1></div>
                  {information}
            </div>
          </div>
             :
             <div className = {cx('item-wrapper')} key = {idx}>
             <div className = {cx('item-image')}><img src = {seller.profile_img} /></div>
              <div className = {cx('item-detail')}>
              <div className = {cx('item-title')}><h1>{data.class_name}</h1></div>
                  {information}
            </div>
          </div>
           } 
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
export default MyPageItemWrapper;