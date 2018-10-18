import React from 'react';
import classNames  from 'classnames/bind';
import styles from './MyPageItemWrapper.scss';
import MyPageAppliedMarket from '../MyPageAppliedMarket';
import MyPageHostMarket from '../MyPageHostMarket';
import MyPageAppliedClass from '../MyPageAppliedClass';
import MyPageHostClass from '../MyPageHostClass';
import MyPageProfile from '../MyPageProfile';
import MyPageLikeSeller from '../MyPageLikeSeller';
import MyPageTakenClass from '../MyPageTakenClass/MyPageTakenClass';
const cx = classNames.bind(styles);
let information = '';

const MyPageItemWrapper = ({ data, openMap, url, editTF, toggleEdit, applyModal }) => {
  if (!data) return null;
  switch(url) {
    case '/mypages/profile' :
            return <MyPageProfile data = {data} editTF={editTF} toggleEdit={toggleEdit}/>
    case '/mypages/like-seller' :
            return <MyPageLikeSeller data = {data}/>
    case '/mypages/like-class' :
            return <MyPageTakenClass data = {data}/>
    default : break;
  }
  const dataDetail = data.map(
    (data,idx) => {
      const { market_poster, class_name, seller, market_name} = data;
      const whoRu = class_name === undefined ? 'market' : 'seller';
      if(!url) return null;
      switch(url){
        case '/mypages/apply-markets' :
            information = <MyPageAppliedMarket openMap={openMap} data = {data}/>
            break;
        case '/mypages/host-classes' :
            information = <MyPageHostClass data = {data}/>
            break;
        case '/mypages/apply-classes' :
            information = <MyPageAppliedClass data = {data}/>
            break;
        case '/mypages/host-markets' :
            information = <MyPageHostMarket applyModal={applyModal} data = {data}/>
            break;
        default: break;
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
              <div className = {cx('item-title')}><h1>{class_name}</h1></div>
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