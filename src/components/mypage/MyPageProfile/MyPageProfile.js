import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageProfile.scss';
import { TiPencil, TiTick, TiTimes } from 'react-icons/ti';

const cx = classNames.bind(styles);

const MyPageProfile = ({ data, editTF, toggleEdit }) => {
  const {user_id} = data;
  return (
    <div className={cx('profile-wrapper')}>
      <div className={cx('profile-info')}>
        <div className={cx('profile-image-wrapper')}>
          <img 
            className={cx('profile-image')}
            src='http://www.worldhotel.co.kr/main/img/avatar/avatar1.png' 
            alt="profile"
          />
        </div>
        <div className={cx('profile-desc')}>
          <h3 className={cx('profile-title')}>
            Let's get you set up
          </h3>
          <p className={cx('profile-short')}>
            it should only take a couple of minutes to pair with your watch
          </p>
        </div>
        {
          !editTF?
          <div className={cx('edit-profile-wrap')}>
            <TiPencil className={cx('edit-btn')} onClick={toggleEdit}/>
          </div>
          :
          <div className={cx('edit-profile-wrap')}>
            <TiTick className={cx('edit-btn')}/>
            <TiTimes className={cx('edit-btn')} onClick={toggleEdit}/>
          </div>
        }
      </div>
      <div className={cx('profile-detail')}>
        <div className={cx('profile-detail-box')}>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Name</span>
            <p className={cx('item-content')}>서현덕</p>
          </div>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Tel</span>
            {
              !editTF?
              <p className={cx('item-content')}>01031003979</p>
              :
              <input className={cx('item-content')} type="text" name="tel"/>
            }
          </div>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Nickname</span>
            {
              !editTF?
              <p className={cx('item-content')}>likelion</p>
              :
              <input className={cx('item-content')} type="text" name="nickName"/>
            }
          </div>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Email</span>
            <p className={cx('item-content')}>racefl93@likelion.org</p>
          </div>
          <div className={cx('input-item')}>
            <span className={cx('item-title')}>Usertype</span>
            <p className={cx('item-content')}>A</p>
          </div>
        </div>
      </div>
    </div>  
  );
}
export default MyPageProfile;