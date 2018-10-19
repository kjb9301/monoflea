import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageProfile.scss';
import { TiPencil, TiTick, TiTimes } from 'react-icons/ti';

const cx = classNames.bind(styles);

const MyPageProfile 
= ({ data, editTF, toggleEdit, changeProfileData, userProfile, updateProfile }) => {
  const { user_id, email, name, nickName, seller, tel, userType } = data;
  let profileImg = 'http://www.worldhotel.co.kr/main/img/avatar/avatar1.png';
  let sns = '';

  let editProfile = userProfile.toJS().profile ? userProfile.toJS().profile : 'http://www.worldhotel.co.kr/main/img/avatar/avatar1.png';
  const editNickName = userProfile.toJS().nickName;
  const editTel = userProfile.toJS().tel;

  if(seller) {
    profileImg = seller.profile_img;
    sns = seller.sns;
  }

  return (
    <div className={cx('profile-wrapper')}>
      <div className={cx('profile-info')}>
        <div className={cx('profile-image-wrapper')}>
          <img 
            className={cx('profile-image')}
            src={profileImg}
            alt="profile"
          />
        </div>
        <div className={cx('profile-desc')}>
          <h3 className={cx('profile-title')}>
            MONOFLEA
          </h3>
          <p className={cx('profile-short')}>
            모노플리의 모든 것을 한 눈에 보세요!
          </p>
        </div>
        {
          !editTF?
          <div className={cx('edit-profile-wrap')}>
            <TiPencil className={cx('edit-btn')} onClick={toggleEdit}/>
          </div>
          :
          <div className={cx('edit-profile-wrap')}>
            <TiTick className={cx('edit-btn')} onClick={updateProfile}/>
            <TiTimes className={cx('edit-btn')} onClick={toggleEdit}/>
          </div>
        }
      </div>
      <div className={cx('profile-detail')}>
        <div className={cx('profile-detail-box')}>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Name</span>
            <p className={cx('item-content')}>{name}</p>
          </div>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Tel</span>
            {
              !editTF?
              <p className={cx('item-content')}>{tel.split('-').join('')}</p>
              :
              <input className={cx('item-content', 'edit-target')} type="text" name="tel" value={editTel} onChange={changeProfileData} autoFocus/>
            }
          </div>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Nickname</span>
            {
              !editTF?
              <p className={cx('item-content')}>{nickName}</p>
              :
              <input className={cx('item-content', 'edit-target')} type="text" name="nickName" value={editNickName} onChange={changeProfileData}/>
            }
          </div>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Email</span>
            <p className={cx('item-content')}>{email}</p>
          </div>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Usertype</span>
            <p className={cx('item-content')}>
              {userType === 'U'? 'User' : (userType === 'H'? 'Host' : 'Seller')}
            </p>
          </div>
        </div>
      </div>
    </div>  
  );
}
export default MyPageProfile;