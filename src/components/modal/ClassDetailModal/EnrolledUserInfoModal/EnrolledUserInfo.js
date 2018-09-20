import React from 'react';
import styles from './EnrolledUserInfo.scss';
import classNames from 'classnames/bind';
import ClassModalWrapper from '../ClassModalWrapper';

const cx = classNames.bind(styles);

const EnrolledUserInfo = ({ username, tel, enrolledUserInfo, handleInput, hideModal, saveInputData }) => {
  return (
    <ClassModalWrapper visible={enrolledUserInfo}>
      <span className={cx('close')} onClick={hideModal}>&times;</span>
      <div>
        <input type="text" name="name" value={username} onChange={handleInput}/>
      </div>
      <div>
        <input type="tel" name="tel" value={tel} onChange={handleInput}/>
      </div>
      <button onClick={saveInputData}>입력</button>
    </ClassModalWrapper>
  );
};

export default EnrolledUserInfo;