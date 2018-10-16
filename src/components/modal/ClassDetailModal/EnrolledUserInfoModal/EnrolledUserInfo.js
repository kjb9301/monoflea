import React from 'react';
import styles from './EnrolledUserInfo.scss';
import classNames from 'classnames/bind';
import ClassModalWrapper from '../ClassModalWrapper';

const cx = classNames.bind(styles);

const EnrolledUserInfo = ({ username, tel, enrolledUserInfo, handleInput, hideModal, saveInputData }) => {
  return (
    <ClassModalWrapper visible={enrolledUserInfo}>
      <div className={cx('enroll-modal')}>
        <div className={cx('enroll-box')}>
          <h1 className={cx('enroll-title')}>
            <span className={cx('close')} onClick={hideModal}>&times;</span>
            원데이 클래스 등록 관련 정보 입력
          </h1>
          <div className={cx('enroll-content-box')}>
            <input 
              className={cx('enroll-content')} 
              type="text" 
              name="name" 
              placeholder='이름을 입력하세요!' 
              value={username} 
              onChange={handleInput}
            />
            <input 
              className={cx('enroll-content')} 
              type="tel" 
              name="tel" 
              value={tel} 
              placeholder='전화번호를 입력하세요!' 
              onChange={handleInput}
            />
          </div>
          <button 
            className={cx('enroll-btn')} 
            onClick={saveInputData}
          >입력
          </button>
        </div>
      </div>
    </ClassModalWrapper>
  );
};

export default EnrolledUserInfo;