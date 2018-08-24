import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import SignupModal from 'components/modal/SignupModal';

class SignupModalContainer extends Component {
  handleSignup = async () => {
    const { BaseActions, modalEmail, modalNickname, modalPassword } = this.props;
    try {
      await BaseActions.signup(modalEmail, modalNickname, modalPassword);
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

  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('signup');
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleSignup();
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    const { BaseActions } = this.props;
    if(name === 'email') {
      BaseActions.changeSignupEmail(value);
    } else if(name === 'nickName') {
      BaseActions.changeSignupNick(value);
    } else {
      BaseActions.changeSignupPassword(value);
    }
  }

  render() {
    const { handleSignup, handleCancel, handleKeyPress, handleChange  } = this;
    const { visible, modalEmail, modalNickname, modalPassword } = this.props;
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
    modalPassword: state.base.getIn(['signupModal', 'password'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(SignupModalContainer);