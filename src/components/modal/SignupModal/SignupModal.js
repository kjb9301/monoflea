import React, { Component } from 'react';
import ModalWrapper from 'components/modal/ModalWrapper';
import styles from './SignupModal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class SignupModal extends Component {
  comparedPassword = true;
  validatedEmail = true;
  validatedPassword = false;

  comparePassword = (e) => {
    this.comparedPassword = this.passwordInput.value === this.passwordCheckInput.value;
    const { onChange } = this.props;
    onChange(e);
  }

  checkEmailValidation = (e) => {
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const { onChange } = this.props;
    this.validatedEmail = emailReg.test(this.emailInput.value);
    onChange(e);
  }

  checkPasswordValidation = (e) => {
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&+=-])(?=.*[0-9]).{8,16}/;
    this.validatedPassword = passwordReg.test(this.passwordInput.value);
  }

  render() {
    const { visible, modalEmail, modalNickname, modalPassword, modalPasswordCheck, onSignup, onCancel, onKeyPress, onChange, checkEmail, checkNick, userType, callNextModal } = this.props;
    const { comparePassword, checkEmailValidation, checkPasswordValidation, validatedEmail, validatedPassword, comparedPassword } = this;
    return (
      <ModalWrapper visible={visible}>
        <div className={cx('form')}>
          <div onClick={onCancel} className={cx('close')}>&times;</div>
          <div className={cx('title')}>회원가입</div>
          <div>
            <input 
              autoFocus
              autoComplete="off"
              type="text"
              name="email"
              placeholder="Email"
              value={modalEmail}
              onChange={(e) => checkEmailValidation(e)}
              onKeyPress={onKeyPress}
              ref={ref => this.emailInput = ref}
            />
            <div className={cx('validate-button')} onClick={checkEmail}>
              중복체크
            </div>
          </div>
          {!this.validatedEmail && <span className={cx('warning-message')}>올바른 이메일을 입력하세요!</span>}
          <div>
            <input 
              type="text"
              autoComplete="off"
              name="nickName"
              placeholder="Nickname"
              value={modalNickname}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <div className={cx('validate-button')} onClick={checkNick}>
              중복체크
            </div>
          </div>
          {/* <span className={cx('warning-message')}>이미 등록된 닉네임입니다!</span> */}
          <div>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={modalPassword}
              onChange={(e) => {
                comparePassword(e)
                checkPasswordValidation(e);
              }} 
              onKeyPress={onKeyPress}
              ref={ref => this.passwordInput = ref}
            />
          </div>
          {!this.validatedPassword && <span className={cx('warning-message')}>특수기호/숫자/문자 조합 8자리 이상입력하세요!</span>}
          <div>
            <input
              type="password"
              name="password-check" 
              placeholder="Password 확인" 
              value={modalPasswordCheck}
              onChange={(e) => this.comparePassword(e)}
              onKeyPress={onKeyPress}
              ref={ref => this.passwordCheckInput = ref}
            />
          </div>
          {!this.comparedPassword && <span className={cx('warning-message')}>패스워드가 일치하지 않습니다</span>}
          <div className={cx('social-login-wrap')}>
            <a href="http://localhost:4000/users/auth/kakao-login" className={cx('kakao-login')}>Kakao</a>
            <a href="http://localhost:4000/users/auth/naver-login" className={cx('naver-login')}>Naver</a>
          </div>
          <div 
            className={cx('login')}
            onClick={() => {
              if(userType==='U') return onSignup(validatedEmail, validatedPassword, comparedPassword);
              callNextModal();
            }}>
            {
              userType === 'U' ? '회원가입' : '다음'
            }
          </div>
        </div>
      </ModalWrapper>
    );
  }
}

export default SignupModal;