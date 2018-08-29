import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import SignupTypeModal from 'components/modal/SignupTypeModal';

class SignupTypeModalContainer extends Component {

  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('signupType');
  }

  handleClick = () => {
    const { type, BaseActions } = this.props;
    if(!type) return alert('가입할 유형을 선택해주세요!');
    BaseActions.hideModal('signupType');
    BaseActions.showModal('signup');  
    BaseActions.initializeSignupModal();
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeUserType(value);
  }

  render() {
    const { visible } = this.props;
    const { handleCancel, handleChange, handleClick } = this;
    return (
      <SignupTypeModal 
        visible={visible}
        onCancel={handleCancel}
        onChangeValue={handleChange}
        onClickButton={handleClick}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'signupType']),
    type: state.base.getIn(['signupTypeModal', 'type'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(SignupTypeModalContainer);