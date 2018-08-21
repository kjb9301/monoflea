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
      await BaseActions.hideModal('login');
    } catch(e) {
      console.log(e);
    }
  }

  handleCancel = () => {
    const { BaseActions, visible } = this.props;
    BaseActions.hideModal('login');
    console.log(visible);
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

  render() {
    const { handleLogin, handleCancel, handleKeyPress, handleChange} = this;
    const { email, password, visible } = this.props;
    console.log(visible);
    return (
      <LoginModal 
        visible={visible} 
        onChange={handleChange}
        onLogin={handleLogin} 
        onCancel={handleCancel}
        onKeyPress={handleKeyPress} 
        email={email} 
        password={password}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'login']),
    email: state.base.getIn(['loginModal', 'email']),
    password: state.base.getIn(['loginModal', 'password']),
    nickName: state.base.get('nickName')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);