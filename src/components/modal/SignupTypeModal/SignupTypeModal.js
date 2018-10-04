import React from 'react';
import styles from './SignupTypeModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

import userImg from './image/user.png';
import sellerImg from './image/seller.png';
import hostImg from './image/host.png';

const cx = classNames.bind(styles);

const SignupTypeModal = ({ visible, onCancel, onChangeValue, onClickButton }) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('SignupTypeModal')}>
        <div onClick={onCancel} className={cx('close')}>&times;</div>
        <div className={cx('list-wrap')}>
          <div className={cx('list')}>
            <img src={userImg} alt="userImg"/>
            <p className={cx('user-type')}>일반</p>
            <div>
              <input type="radio" name="userType" value="U" onChange={onChangeValue}/>
            </div>
          </div>
          <div className={cx('list')}>
            <img src={sellerImg} alt="sellerImg"/>
            <p className={cx('user-type')}>셀러</p>
            <div>
              <input type="radio" name="userType" value="S" onChange={onChangeValue}/>
            </div>
          </div>
          <div className={cx('list')}>
            <img src={hostImg} alt="hostImg"/>
            <p className={cx('user-type')}>주최자</p>
            <div>
              <input type="radio" name="userType" value="H" onChange={onChangeValue}/>
            </div>
          </div>
        </div>
        <div className={cx('button-wrap')}>
          <div className={cx('button')} onClick={onClickButton}>
            다음
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SignupTypeModal;