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
    const { visible, classDetail, nickName } = this.props;
    const { hideModal } = this;
    return (
      <ClassDetailModal 
        visible={visible}
        classDetail={classDetail}
        hideModal={hideModal}
        nickName={nickName}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'class']),
    classDetail: state.class.get('classDetail'),
    nickName: state.base.get('nickName')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ClassDetailContainer);