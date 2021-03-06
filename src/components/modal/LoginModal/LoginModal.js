import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const LoginModal = ({ onLogin, handleSocialLogin, onCancel, visible, onKeyPress, handleCancel, onChange, email, password }) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('form')}>
        <div onClick={onCancel} className={cx('close')}>&times;</div>
        <div className={cx('title')}>로그인</div>
        <input autoFocus type="text" name="email" placeholder="Email" value={email} onChange={onChange} onKeyPress={onKeyPress} />
        {/* <div className={cx('description')}>비밀번호를 입력하세요</div> */}
        <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} onKeyPress={onKeyPress} />
        <div className={cx('social-login-wrap')}>
          <div className={cx('kakao-login')} onClick={() => handleSocialLogin("http://localhost:4000/users/auth/kakao-login")}>
            Kakao
          </div>
          <div className={cx('naver-login')} onClick={() => handleSocialLogin("http://localhost:4000/users/auth/naver-login")}>
            Naver
          </div>
        </div>
        <div className={cx('login')} onClick={onLogin}>로그인</div>
      </div>
    </ModalWrapper>
  );
};

export default LoginModal;