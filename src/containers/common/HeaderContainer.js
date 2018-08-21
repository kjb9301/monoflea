import React, { Component } from 'react';
import Header from 'components/common/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class HeaderContainer extends Component {
  handleLoginClick = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('login');
    const { visible } = this.props;
    console.log(visible);
    BaseActions.initializeLoginModal();
  }

  render() {
    const { handleLoginClick } = this;
    return (
      <Header onLoginClick={handleLoginClick}/>
    );
  }
}

export default connect(
  (state) => ({
    logged: state.base.get('logged'),
    visible: state.base.getIn(['modal', 'login'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);