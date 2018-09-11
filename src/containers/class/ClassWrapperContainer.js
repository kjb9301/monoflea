import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClassWrapper from 'components/class/ClassWrapper';

import * as baseActions from 'store/modules/base';

class ClassWrapperContainer extends Component {
  render() {
    const { userType } = this.props;
    return (
      <div>
        <ClassWrapper 
          userType={userType}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userType: state.base.get('userType'),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ClassWrapperContainer);