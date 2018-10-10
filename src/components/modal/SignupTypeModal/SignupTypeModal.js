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
        <div className={cx('signup-title')}>다음 가입 방법 중 하나를 선택하세요.</div>
        <div className={cx('singup-body')}>
          <div className={cx('list-wrap')}>
            <div className={cx('list')}>
              <div><img src={userImg} alt="userImg"/></div>
              <p className={cx('user-type')}><label htmlFor="gen-user">일반</label></p>
              <div>
                <input type="radio" id="gen-user" name="userType" value="U" onChange={onChangeValue} />
              </div>
            </div>
            <div className={cx('list')}>
              <div><img src={sellerImg} alt="sellerImg"/></div>
              <p className={cx('user-type')}><label htmlFor="seller-user">셀러</label></p>
              <div>
                <input type="radio" id="seller-user" name="userType" value="S" onChange={onChangeValue}/>
              </div>
            </div>
            <div className={cx('list')}>
              <div><img src={hostImg} alt="hostImg"/></div>
              <p className={cx('user-type')}><label htmlFor="market-user">주최자</label></p>
              <div>
                <input type="radio" id="market-user" name="userType" value="H" onChange={onChangeValue}/>
              </div>
            </div>
          </div>
          <div className={cx('button-wrap')}>
            <div className={cx('button')} onClick={onClickButton}>
              다음
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SignupTypeModal;