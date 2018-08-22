import React, { Component } from 'react';
import Header from 'components/common/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

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

  componentDidMount() {
    this.checkLoginUser();
  }

  render() {
    console.log(1);
    const { handleLoginClick } = this;
    const { logged, nickName } = this.props;
    return (
      <Header onLoginClick={handleLoginClick} logged={logged} nickName={nickName}/>
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
)(HeaderContainer);