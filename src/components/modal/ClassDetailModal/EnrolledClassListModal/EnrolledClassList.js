import React from 'react';
import styles from './EnrolledClassList.scss';
import classNames from 'classnames/bind';
import ClassModalWrapper from '../ClassModalWrapper/ClassModalWrapper';

const cx = classNames.bind(styles);

const EnrolledClassList = ({ visible, enrolledList, closeEnrollList }) => {
  const userList = enrolledList.map((user, i) => 
    (
      <div key={i}>{user.nickName} {user.email} {user.name} {user.tel}</div>
    )
  )
  return (
    <ClassModalWrapper visible={visible}>
      <div>
        <span onClick={closeEnrollList}>&times;</span>
      </div>
      {userList}
    </ClassModalWrapper>
  );
};

export default EnrolledClassList;