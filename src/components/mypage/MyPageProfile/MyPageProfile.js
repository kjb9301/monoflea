import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageProfile';

const cx = classNames.bind(styles);

const MyPageProfile = ({data}) => {
  const {user_id} = data;
  return (
    <div>{user_id}</div>
  )
}
export default MyPageProfile;