import React from 'react';
import styles from './LoginedSellerDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { GoHeart } from "react-icons/go";

const cx = classNames.bind(styles);


const LoginedSellerDetailModal = ({visible, loginedSellerData, onChange,loggedNickName, onClose,editTF,onUpdate, onEdit,  onCancel,likeUp}) => {
  const {career, sns, seller_desc, profile_img, user, seller_images, sellerCategory,seller_id ,show_TF} = loginedSellerData;
  const { nickName } = user.nickName;
  let  { imgUrl }  = seller_images; 
  const { category_ko } = sellerCategory.category_ko;
  if( !user || !imgUrl ) return null;
   const imgList = imgUrl.map(
     (imgItem, idx) => {
       const { imgUrl } = imgItem;
       return <img src = {imgUrl}
               key = {idx}
               />
     }
   )
 return (
   <ModalWrapper  visible = {visible} > 
    
    { editTF ? 
       <div className={cx('modalForm')}>
           <div className={cx('close')} onClick={onClose}><span>&times;</span></div>
             <div className={cx('wrapper')}>
               <div className={cx('profile')}> <img src = {profile_img}/> </div>
                 <div className={cx('desc')}>
                   <div className={cx('info')}>
                     <div>이름 : {nickName} </div>
                     <div>분야 : {category_ko}</div>
                     <div>경력 : {career}년  <br/> SNS : <input name='sns' value = {sns} onChange = {onChange}/> </div>
                       ss자기소개 : <textarea name='seller_desc' value = {seller_desc} onChange = {onChange}/>
                       { show_TF ? 
                        <div className = {cx('radio')}> 공개여부 :
                        공개 <input type ='radio' name = 'show_TF' value = '1' defaultChecked = 'true' onChange = {onChange} />
                        비공개 <input type ='radio' name = 'show_TF' value = '0'  onChange = {onChange}/>
                        </div>
                       : 
                        <div className = {cx('radio')}> 공개여부 :
                          공개 <input type ='radio' name = 'show_TF' value = '1'  onChange = {onChange} />
                          비공개 <input type ='radio' name = 'show_TF' value = '0' defaultChecked = 'true' onChange = {onChange}/>
                        </div>
                      }
                       {/* <div className = {cx('radio')}> 공개여부 :
                         공개 <input type ='radio' name = 'show_TF' value = '1'  onChange = {onChange} />
                         비공개 <input type ='radio' name = 'show_TF' value = '0'  onChange = {onChange}/>
                       </div> */}
                       <div> <GoHeart/> 좋아요  </div> 
                   </div>
               </div>
             </div>
           <div className = {cx('seller_img')}> {imgList} </div>
         <button onClick = {() => onUpdate(seller_id)}> 저장 </button>
         <button onClick = { () => {onEdit() 
                                    onCancel()}}> 취소</button>
       </div>
   :
       <div className={cx('modalForm')}>
         <div className={cx('close')} onClick={onClose}><span>&times;</span></div>
           <div className={cx('wrapper')}>
             <div className={cx('profile')}> <img src = {profile_img}/> </div>
             <div className={cx('desc')}>
                 <div className={cx('info')}>
                   <div>이름 : {nickName} </div>
                   <div>분야 : {category_ko}</div>
                   <div>경력 : {career}년  <br/> SNS : {sns} </div>
                   ss자기소개 : {seller_desc}
                   <div className = {cx('like')}> <GoHeart className= {cx('heart')} onClick = {likeUp}/> 좋아요  </div> 
                 </div>
               </div>
             </div>
         <div className = {cx('seller_img')}> {imgList} </div>
         <button onClick = {onEdit}> sss수정</button>
       {/* <Button toGetData = {onModal}> 수정</Button> */}
       </div> 
   }
   </ModalWrapper>

 )
}

export default LoginedSellerDetailModal