import React, { Component } from 'react';
import ModalWrapper from 'components/modal/ModalWrapper';
import styles from './SignupModal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// class SignupModal extends Component {

//   render() {
//     const { visible, modalEmail, modalNickname, modalPassword, onSignup, onCancel, onKeyPress, onChange } = this.props;
//     return (
//       <ModalWrapper visible={visible}>
//         <div className={cx('form')}>
//           <div onClick={onCancel} className={cx('close')}>&times;</div>
//           <div className={cx('title')}>회원가입</div>
//           <input 
//             autoFocus 
//             type="text" 
//             name="email" 
//             placeholder="Email" 
//             value={modalEmail} 
//             onChange={onChange} 
//             onKeyPress={onKeyPress} 
//           />
//           {!true && <span className={cx('warning-message')}>이미 가입된 이메일입니다!</span>}
//           <input 
//             type="text" 
//             name="nickName" 
//             placeholder="Nickname" 
//             value={modalNickname} 
//             onChange={onChange} 
//             onKeyPress={onKeyPress} 
//           />
//           <span className={cx('warning-message')}>이미 등록된 닉네임입니다!</span>
//           <input 
//             type="password" 
//             name="password" 
//             placeholder="Password" 
//             value={modalPassword} 
//             onChange={onChange} 
//             onKeyPress={onKeyPress}
//           />
//           <span className={cx('warning-message')}>특수기호/숫자 조합 8자리 이상입력하세요!</span>
//           <input
//             type="password"
//             name="password-check" 
//             placeholder="Password 확인" 
//             onChange={onChange}
//             onKeyPress={onKeyPress}
//           />
//           {<span className={cx('warning-message')}>패스워드가 일치하지 않습니다</span>}
//           <div className={cx('social-login-wrap')}>
//             <a href="http://localhost:4000/users/auth/kakao-login" className={cx('kakao-login')}>Kakao</a>
//             <a href="http://localhost:4000/users/auth/naver-login" className={cx('naver-login')}>Naver</a>
//           </div>
//           <div className={cx('login')} onClick={onSignup}>회원가입</div>
//         </div>
//       </ModalWrapper>
//     );
//   }
// }


const SignupModal = 
({ visible, modalEmail, modalNickname, modalPassword, onSignup, onCancel, onKeyPress, onChange, comparedPasswordValidation }) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('form')}>
        <div onClick={onCancel} className={cx('close')}>&times;</div>
        <div className={cx('title')}>회원가입</div>
        <input 
          autoFocus 
          type="text" 
          name="email" 
          placeholder="Email" 
          value={modalEmail} 
          onChange={onChange} 
          onKeyPress={onKeyPress} 
        />
        {!true && <span className={cx('warning-message')}>이미 가입된 이메일입니다!</span>}
        <input 
          type="text" 
          name="nickName" 
          placeholder="Nickname" 
          value={modalNickname} 
          onChange={onChange} 
          onKeyPress={onKeyPress} 
        />
        <span className={cx('warning-message')}>이미 등록된 닉네임입니다!</span>
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={modalPassword} 
          onChange={onChange} 
          onKeyPress={onKeyPress}
        />
        <span className={cx('warning-message')}>특수기호/숫자 조합 8자리 이상입력하세요!</span>
        <input
          type="password"
          name="password-check" 
          placeholder="Password 확인" 
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        {comparedPasswordValidation && <span className={cx('warning-message')}>패스워드가 일치하지 않습니다</span>}
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