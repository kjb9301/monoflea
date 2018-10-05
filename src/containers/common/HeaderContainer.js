import React, { Component } from 'react';
import Header from 'components/common/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends Component {
  handleLoginClick = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('login');
    BaseActions.initializeLoginModal();
  }

  handleSignupClick = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('signupType');
  }

  handleLogout = async () => {
    const { BaseActions, history } = this.props;
    await BaseActions.logout();
    delete localStorage.nickName;
    alert('로그아웃 되었습니다!');
    return history.push('/');
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { logged } = this.props;
    return nextProps.logged !== logged;
  }

  render() {
    const { handleLoginClick, handleLogout, handleSignupClick } = this;
    const { logged, nickName, isLogin, userName } = this.props;
    return (
      <Header 
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onLogout={handleLogout} 
        logged={logged} 
        nickName={nickName}
        isLogin={isLogin}
        userName={userName}
      />
    );
  }
}

export default connect(
  (state) => ({
    logged: state.base.get('logged'),
    nickName: state.base.get('nickName'),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(HeaderContainer));