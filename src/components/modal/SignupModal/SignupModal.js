import React from 'react';
import ModalWrapper from 'components/modal/ModalWrapper';
import styles from './SignupModal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SignupModal = ({ visible, modalEmail, modalNickname, modalPassword, onSignup, onCancel, onKeyPress, onChange }) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('form')}>
        <div onClick={onCancel} className={cx('close')}>&times;</div>
        <div className={cx('title')}>회원가입</div>
        <input autoFocus type="text" name="email" placeholder="Email" value={modalEmail} onChange={onChange} onKeyPress={onKeyPress} />
        {/* <div className={cx('description')}>관리자 비밀번호를 입력하세요</div> */}
        <input autoFocus type="text" name="nickName" placeholder="Nickname" value={modalNickname} onChange={onChange} onKeyPress={onKeyPress} />
        <input type="password" name="password" placeholder="Password" value={modalPassword} onChange={onChange} onKeyPress={onKeyPress} />
        <div className={cx('social-login-wrap')}>
          <a href="http://localhost:4000/users/auth/kakao-login" className={cx('kakao-login')}>Kakao</a>
          <a href="http://localhost:4000/users/auth/naver-login" className={cx('naver-login')}>Naver</a>
        </div>
        <div className={cx('login')} onClick={onSignup}>회원가입</div>
      </div>
    </ModalWrapper>
  );
};

export default SignupModal;