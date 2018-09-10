import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClassDetailModal from 'components/modal/ClassDetailModal'

import * as baseActions from 'store/modules/base';

class ClassDetailContainer extends Component {

  hideModal = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('class');
  }

  render() {
    const { visible, classDetail } = this.props;
    const { hideModal } = this;
    return (
      <ClassDetailModal 
        visible={visible}
        classDetail={classDetail}
        hideModal={hideModal}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'class']),
    classDetail: state.class.get('classDetail')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ClassDetailContainer);