import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import SignupMoreDataModal from 'components/modal/SignupMoreDataModal';

class SignupMoreDataModalContainer extends Component {

  onChangeValue = (e) => {
    const { name, value } = e.target;
    const { BaseActions } = this.props;

    if(name === 'name') {
      BaseActions.changeMoreName(value);
    } else if(name === 'tel') {
      BaseActions.changeMoreTel(value);
    } else if(name === 'category') {
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

  onSignup = async () => {
    const { 
      BaseActions,
      modalEmail,
      modalNickname,
      modalPassword,
      userType,
      name,
      tel,
      category,
      career,
      sns,
      profile_img,
      biz,
      desc,
      classTF,
      showTF
    } = this.props;
    if(!this.checkValidations()) return;
    await BaseActions.signup(modalEmail, modalNickname, modalPassword, userType, name, tel, category, career, sns, profile_img, biz, desc, classTF, showTF);
    alert('가입이 완료되었습니다!');
    BaseActions.hideModal('signupMore');
  }

  onCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('signupMore');
  }

  onMovePrev = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('signupMore');
    BaseActions.showModal('signup');
  }

  checkValidations = () => {
    const {
      name,
      tel,
      category,
      career,
      profile_img,
      biz,
      desc,
      classTF,
      showTF
    } = this.props;
    
    const telReg = /^\d{2,3}-\d{3,4}-\d{4}$/;

    if(name.length === 0) {
      alert('이름은 필수사항입니다!');
      return false;
    } else if(tel.length === 0 || !telReg.test(tel)) {
      alert('전화번호는 필수사항입니다! (ex. 010-1234-1234)');
      return false;
    } else if(category.length === 0 || category === "0") {
      alert('카테고리를 선택하세요!');
      return false;
    } else if(career.length === 0 || career<0) {
      alert('경력은 필수사항입니다!(0년 이상)');
      return false;
    } else if(profile_img.length === 0) {
      alert('프로필 이미지는 필수사항입니다!');
      return false;
    } else if(biz.length === 0 || !(biz === 'Y' || biz === 'N')) {
      alert('사업자 여부는 필수사항입니다.(Y/N)');
      return false;
    } else if(desc.length === 0) {
      alert('셀러소개는 필수사항입니다!');
      return false;
    } else if(classTF.length === 0 || !(classTF === 'Y' || classTF === 'N')) {
      alert('원데이 클래스 주최는 필수사항입니다.(Y/N)');
      return false;
    } else if(showTF.length === 0 || !(showTF === 'Y' || showTF === 'N')) {
      alert('셀러 정보 노출 여부는 필수사항입니다.(Y/N)');
      return false;
    }
    return true;
  }

  getSellerCategory = async () => {
    const { BaseActions } = this.props;
    await BaseActions.callSellerCategory();
  }

  componentDidMount() {
    this.getSellerCategory();
  }

  render() {
    const { visible, sellerCategory, userType } = this.props;
    const { onChangeValue, onSignup, onCancel, onMovePrev } = this;
    return (
      <SignupMoreDataModal 
        visible={visible}
        onChangeValue={onChangeValue}
        onSignup={onSignup}
        onCancel={onCancel}
        onMovePrev={onMovePrev}
        sellerCategory={sellerCategory}
        userType={userType}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'signupMore']),
    sellerCategory: state.base.getIn(['signupMoreModal', 'sellerCategory']),
    name: state.base.getIn(['signupMoreModal', 'name']),
    tel: state.base.getIn(['signupMoreModal', 'tel']),
    category: state.base.getIn(['signupMoreModal', 'category']),
    career: state.base.getIn(['signupMoreModal', 'career']),
    sns: state.base.getIn(['signupMoreModal', 'sns']),
    profile_img: state.base.getIn(['signupMoreModal', 'profile_img']),
    biz: state.base.getIn(['signupMoreModal', 'biz']),
    desc: state.base.getIn(['signupMoreModal', 'desc']),
    classTF: state.base.getIn(['signupMoreModal', 'classTF']),
    showTF: state.base.getIn(['signupMoreModal', 'showTF']),
    modalEmail: state.base.getIn(['signupModal', 'email']),
    modalNickname: state.base.getIn(['signupModal', 'nickName']),
    modalPassword: state.base.getIn(['signupModal', 'password']),
    userType: state.base.getIn(['signupTypeModal', 'type'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(SignupMoreDataModalContainer);