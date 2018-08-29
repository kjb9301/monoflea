import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import SignupMoreDataModal from 'components/modal/SignupMoreDataModal';

class SignupMoreDataModalContainer extends Component {

  onChangeValue = (e) => {
    const { name, value } = e.target;
    const { BaseActions } = this.props;

    if(name === 'category') {
      BaseActions.changeMoreCategory(value);
    } else if(name === 'career') {
      BaseActions.changeMoreCareer(value);
    } else if(name === 'sns') {
      BaseActions.changeMoreSNS(value);
    } else if(name === 'profileImg') {
      BaseActions.changeMoreProfileImg(value);
    } else if(name === 'biz') {
      BaseActions.changeMoreBiz(value);
    } else if(name === 'desc') {
      BaseActions.changeMoreDesc(value);
    } else if(name === 'class') {
      BaseActions.changeMoreClass(value);
    } else if(name === 'show') {
      BaseActions.changeMoreShow(value);
    }
  }

  onSaveUserData = () => {
    const { category, career, sns, profile_img, biz, desc, classTF, showTF } = this.props;
  }

  render() {
    const { visible } = this.props;
    const { onChangeValue } = this;
    return (
      <SignupMoreDataModal 
        visible={visible}
        onChangeValue={onChangeValue}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'signupMore']),
    category: state.base.getIn(['signupMoreModal', 'category']),
    career: state.base.getIn(['signupMoreModal', 'career']),
    sns: state.base.getIn(['signupMoreModal', 'sns']),
    profile_img: state.base.getIn(['signupMoreModal', 'profile_img']),
    biz: state.base.getIn(['signupMoreModal', 'biz']),
    desc: state.base.getIn(['signupMoreModal', 'desc']),
    classTF: state.base.getIn(['signupMoreModal', 'classTF']),
    showTF: state.base.getIn(['signupMoreModal', 'showTF']),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(SignupMoreDataModalContainer);