import React, { Component } from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import SignupModalContainer from 'containers/modal/SignupModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class Base extends Component {
  render() {
    return (
      <div>
        <LoginModalContainer/>
        <SignupModalContainer/>
      </div>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);