import React from 'react';
import styles from './EnrolledClassList.scss';
import classNames from 'classnames/bind';
import ClassModalWrapper from '../ClassModalWrapper/ClassModalWrapper';

const cx = classNames.bind(styles);

const EnrolledClassList = ({ visible, enrolledList, closeEnrollList }) => {
  const userList = enrolledList.map((user, i) => 
    (
      <div key={i} className={cx('enroll-list-box')}>
        <p className={cx('enroll-content')}>{Number(i)+1}</p>
        <p className={cx('enroll-content')}>{user.nickName}</p>
        <p className={cx('enroll-content')}>{user.email}</p>
        <p className={cx('enroll-content')}>{user.name}</p>
        <p className={cx('enroll-content')}>{user.tel.split('-').join('')}</p>
      </div>
    )
  )
  return (
    <ClassModalWrapper visible={visible}>
      <div className={cx('enroll-modal')}>
        <div className={cx('enroll-box')}>
          <h1 className={cx('enroll-title')}>
            <span className={cx('close')} onClick={closeEnrollList}>&times;</span>
              클래스 신청자 리스트
          </h1>
          <div className={cx('enroll-item')}>
            <div className={cx('item')}>
              #
            </div>
            <div className={cx('item')}>
              닉네임
            </div>
            <div className={cx('item')}>
              이메일
            </div>
            <div className={cx('item')}>
              이름
            </div>
            <div className={cx('item')}>
              전화번호
            </div>
          </div>
          {userList}
          <button 
            className={cx('enroll-btn')} 
            onClick={closeEnrollList}
          >확인
          </button>
        </div>
      </div>
    </ClassModalWrapper>
  );
};

export default EnrolledClassList;