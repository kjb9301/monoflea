import React from 'react';
import styles from './EnrolledUserInfo.scss';
import classNames from 'classnames/bind';
import ClassModalWrapper from '../ClassModalWrapper';

const cx = classNames.bind(styles);

const EnrolledUserInfo = ({ username, tel, enrolledUserInfo, handleInput, hideModal, saveInputData }) => {
  return (
    <ClassModalWrapper visible={enrolledUserInfo}>
      <h1>원데이 클래스 등록 관련 정보 입력</h1>
      <span className={cx('close')} onClick={hideModal}>&times;</span>
      <div>
        <input type="text" name="name" placeholder='이름을 입력하세요!' value={username} onChange={handleInput}/>
      </div>
      <div>
        <input type="tel" name="tel" value={tel} placeholder='전화번호를 입력하세요!' onChange={handleInput}/>
      </div>
      <button onClick={saveInputData}>입력</button>
    </ClassModalWrapper>
  );
};

export default EnrolledUserInfo;