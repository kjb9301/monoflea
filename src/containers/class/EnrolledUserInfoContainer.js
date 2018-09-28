import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EnrolledUserInfo from 'components/modal/ClassDetailModal/EnrolledUserInfoModal';

import * as classUIActions from 'store/modules/classUI';
import * as classActions from 'store/modules/class';
import * as baseActions from 'store/modules/base';

class EnrolledUserInfoContainer extends Component {

  handleInput = (e) => {
    const { name, value } = e.target;
    const { ClassUIActions } = this.props;
    ClassUIActions.changeEnrollInfo({ name, value });
  }

  hideModal = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('enrolledUserInfo');
  }

  saveInputData = async () => {
    const { ClassActions, BaseActions, username, tel } = this.props;
    const enrolledResult = await ClassActions.saveEnrollUser({ username, tel });
    const { isSaveInfo } = enrolledResult.data;
    if(isSaveInfo) {
      await BaseActions.loginUserCheck();
      alert('정보가 정상적으로 등록되었습니다. 클래스 등록 버튼을 눌러주세요!');
      return BaseActions.hideModal('enrolledUserInfo');
    }
    return alert('일시적인 오류입니다. 다시 시도해주세요!');
  }

  render() {
    const { username, tel, enrolledUserInfo } = this.props;
    const { handleInput, hideModal, saveInputData } = this;
    return (
      <div>
        <EnrolledUserInfo
          username={username}
          tel={tel}
          handleInput={handleInput}
          enrolledUserInfo={enrolledUserInfo}
          hideModal={hideModal}
          saveInputData={saveInputData}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    username: state.classUI.getIn(['enroll', 'name']),
    tel: state.classUI.getIn(['enroll', 'tel']),
    enrolledUserInfo: state.base.getIn(['modal', 'enrolledUserInfo']),
  }),
  (dispatch) => ({
    ClassUIActions: bindActionCreators(classUIActions, dispatch),
    ClassActions: bindActionCreators(classActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(EnrolledUserInfoContainer);