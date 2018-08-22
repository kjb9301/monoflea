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

  checkLoginUser = async () => {
    const { BaseActions } = this.props;
    await BaseActions.loginUserCheck();
    const { logged, nickName } = this.props;
    if(!logged) return delete localStorage.nickName;
    localStorage.nickName = nickName;
  }

  handleLogout = async () => {
    const { BaseActions, history } = this.props;
    await BaseActions.logout();
    delete localStorage.nickName;
    alert('로그아웃 되었습니다!');
    return history.push('/');
  }

  componentDidMount() {
    this.checkLoginUser();
  }

  render() {
    console.log(1);
    const { handleLoginClick, handleLogout } = this;
    const { logged, nickName } = this.props;
    return (
      <Header onLoginClick={handleLoginClick} onLogout={handleLogout} logged={logged} nickName={nickName}/>
    );
  }
}

export default connect(
  (state) => ({
    logged: state.base.get('logged'),
    nickName: state.base.get('nickName'),
    visible: state.base.getIn(['modal', 'login'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(HeaderContainer));