import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import SignupModal from 'components/modal/SignupModal';

class SignupModalContainer extends Component {

  comparedPasswordValidation = false;

  handleSignup = async (validatedEmail, validatedPassword, comparedPassword) => {
    const { BaseActions, modalEmail, modalNickname, modalPassword } = this.props;
    if(!this.checkValidations(validatedEmail, validatedPassword, comparedPassword)) return;
    try {
      await BaseActions.signup({ modalEmail, modalNickname, modalPassword });
      const { logged, nickName } = this.props;
      if(logged) {
        localStorage.nickName = nickName;
        alert('가입이 완료되었습니다!');
        return BaseActions.hideModal('signup');
      }
    } catch(e) {
      console.log(e);
    }
  }

  checkValidations = (validatedEmail, validatedPassword, comparedPassword) => {
    const { checkedEmail, checkedNick } = this.props;
    if(!validatedEmail) {
      alert('유효한 이메일이 아닙니다!');
      return false;
    } else if(!checkedEmail) {
      alert('이메일 중복확인을 해주세요!');
      return false;
    } else if(!checkedNick) {
      alert('닉네임 중복확인을 해주세요!');
      return false;
    } else if(!validatedPassword) {
      alert('유효한 패스워드가 아닙니다!');
      return false;
    } else if(!comparedPassword) {
      alert('패스워드가 일치하지 않습니다!');
      return false;
    }
    return true;
  }

  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('signup');
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleSignup();
    }
  }

  checkEmail = async () => {
    const { BaseActions, modalEmail } = this.props;
    await BaseActions.checkEmail(modalEmail);
    const { checkedEmailMessage } = this.props;
    alert(checkedEmailMessage);
  }

  checkNick = async () => {
    const { BaseActions, modalNickname } = this.props;
    await BaseActions.checkNickname(modalNickname);
    const { checkedNickMessage } = this.props;
    alert(checkedNickMessage);
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    const { BaseActions } = this.props;
    if(name === 'email') {
      BaseActions.changeSignupEmail(value);
    } else if(name === 'nickName') {
      BaseActions.changeSignupNick(value);
    } else if(name === 'password'){
      BaseActions.changeSignupPassword(value);
    } else if(name === 'password-check'){
      BaseActions.changeSignupPasswordCheck(value);
    }
  }

  callNextModal = (validatedEmail, validatedPassword, comparedPassword) => {
    const { BaseActions } = this.props;
    if(!this.checkValidations(validatedEmail, validatedPassword, comparedPassword)) return;
    BaseActions.hideModal('signup');
    BaseActions.showModal('signupMore');
  }

  handleSocialSignup = (url) => {
    const { BaseActions, userType } = this.props;
    const popup = window.open(url, "_blank", "width=500px, height=500px");
    const timer = setInterval(() => {
      if(popup.closed) {
        // window.location.reload();
        BaseActions.hideModal('signup');
        if(userType === 'S' || userType === 'H') {
          BaseActions.showModal('signupMore');
        }
        clearInterval(timer);
      }
    }, 1000);
  }  

  render() {
    const { handleSignup, handleSocialSignup, handleCancel, handleKeyPress, handleChange, checkEmail, checkNick, callNextModal } = this;
    const { visible, modalEmail, modalNickname, modalPassword, modalPasswordCheck, userType } = this.props;
    return (
      <SignupModal
        visible={visible}
        onSignup={handleSignup}
        onCancel={handleCancel}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        modalEmail={modalEmail}
        modalNickname={modalNickname}
        modalPassword={modalPassword}
        modalPasswordCheck={modalPasswordCheck}
        checkEmail={checkEmail}
        checkNick={checkNick}
        userType={userType}
        callNextModal={callNextModal}
        handleSocialSignup={handleSocialSignup}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'signup']),
    logged: state.base.get('logged'),
    nickName: state.base.get('nickName'),
    modalEmail: state.base.getIn(['signupModal', 'email']),
    modalNickname: state.base.getIn(['signupModal', 'nickName']),
    modalPassword: state.base.getIn(['signupModal', 'password']),
    modalPasswordCheck: state.base.getIn(['signupModal', 'passwordCheck']),
    checkedEmail: state.base.getIn(['signupModal', 'checkedEmail']),
    checkedEmailMessage: state.base.getIn(['signupModal', 'checkedEmailMessage']),
    checkedNick: state.base.getIn(['signupModal', 'checkedNick']),
    checkedNickMessage: state.base.getIn(['signupModal', 'checkedNickMessage']),
    userType: state.base.getIn(['signupTypeModal', 'type'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(SignupModalContainer);