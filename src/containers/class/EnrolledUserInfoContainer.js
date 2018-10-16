import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EnrolledUserInfoModal from 'components/modal/ClassDetailModal/EnrolledUserInfoModal';

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

  checkValidation = () => {
    const { username, tel } = this.props;
    if(username.length === 0) return alert('이름을 입력해주세요!');
    else if(tel.length === 0) return alert('전화번호를 입력해주세요!');
    return true;
  }

  saveInputData = async () => {
    const { ClassActions, BaseActions, username, tel } = this.props;
    const { checkValidation } = this;
    if(!checkValidation()) return;
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
        <EnrolledUserInfoModal
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