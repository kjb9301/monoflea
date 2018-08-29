import React, { Component } from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import SignupModalContainer from 'containers/modal/SignupModalContainer';
import SignupTypeModalContainer from 'containers/modal/SignupTypeModalContainer';
import SignupMoreDataModalContainer from 'containers/modal/SignupMoreDataModalContainer';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as baseActions from 'store/modules/base';

class Base extends Component {
  render() {
    return (
      <div>
        <LoginModalContainer/>
        <SignupModalContainer/>
        <SignupTypeModalContainer/>
        <SignupMoreDataModalContainer/>
      </div>
    );
  }
}

export default Base;

// export default connect(
//   null,
//   (dispatch) => ({
//     BaseActions: bindActionCreators(baseActions, dispatch)
//   })
// )(Base);