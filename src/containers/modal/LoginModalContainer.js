import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class LoginModalContainer extends Component {
  handleLogin = async () => {
    const { BaseActions, email, password } = this.props;
    try {
      await BaseActions.login(email, password);
      const { logged, nickName, message = '올바른 입력이 아닙니다!' } = this.props;
      if(logged) {
        localStorage.nickName = nickName;
        return BaseActions.hideModal('login');        
      }
      alert(message);
    } catch(e) {
      console.log(e);
    }
  }

  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('login');
  }
 
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleLogin();
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    const { BaseActions } = this.props;
    if(name === 'email') {
      return BaseActions.changeEmailInput(value);
    }
    BaseActions.changePasswordInput(value);
  }

  handleSocialLogin = (url) => {
    const { BaseActions } = this.props;
    window.open(url, "_blank", "width=800px, height=800px");
    BaseActions.hideModal('login');
    window.location.reload();
  }

  render() {
    const { handleLogin, handleCancel, handleKeyPress, handleChange, handleSocialLogin } = this;
    const { email, password, visible } = this.props;
    return (
      <LoginModal 
        visible={visible} 
        onChange={handleChange}
        onLogin={handleLogin}
        onCancel={handleCancel}
        onKeyPress={handleKeyPress} 
        email={email} 
        password={password}
        handleSocialLogin={handleSocialLogin}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'login']),
    email: state.base.getIn(['loginModal', 'email']),
    password: state.base.getIn(['loginModal', 'password']),
    nickName: state.base.get('nickName'),
    logged: state.base.get('logged'),
    message: state.base.get('loginMessage')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);