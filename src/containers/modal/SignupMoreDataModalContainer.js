import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import SignupMoreDataModal from 'components/modal/SignupMoreDataModal';
import axios from 'axios';

const bodyData = new FormData();

class SignupMoreDataModalContainer extends Component {

  onChangeValue = (e) => {
    const { name, value, files } = e.target;
    const { BaseActions } = this.props;
    files ? bodyData.append(name, files[0]) : bodyData.set(name, value);
    BaseActions.changeMoreInfo({ name, value, files });
  }

  onSignup = async () => {
    const { 
      BaseActions,
      modalEmail,
      modalNickname,
      modalPassword,
      userType
    } = this.props;    
    
    if(!this.checkValidations()) return;
    

    if(!modalNickname) {
      await BaseActions.loginUserCheck();
      const { nickName } = this.props;
      bodyData.set('nickName', nickName);
      bodyData.set('userType', userType);
      await axios.post('/users/social-signup', bodyData);
      // await axios.post('/users/social-signup', { userType, nickName, name, tel, category, career, sns, profile_img, biz, desc, classTF, showTF });
    } else {
      // await BaseActions.signup({ modalEmail, modalNickname, modalPassword, userType, name, tel, category, career, sns, profile_img, biz, desc, classTF, showTF });
    }
    alert('가입이 완료되었습니다!');
    BaseActions.hideModal('signupMore');
  }

  onCancel = async () => {
    const { BaseActions, modalNickname } = this.props;
    if(!modalNickname) {
      await BaseActions.loginUserCheck();
      const { nickName } = this.props;
      await axios.delete('/users/social-signup', { nickName });
      await BaseActions.loginUserCheck(); // 리액트 로그아웃
      // return window.location.reload();
    }
    BaseActions.hideModal('signupMore');
  }

  onMovePrev = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('signupMore');
    BaseActions.showModal('signup');
  }

  checkAuthNum = () => {
    const { checkNum, authInfo, BaseActions } = this.props;
    if(authInfo.get('authNum') == checkNum) {
      BaseActions.changeMoreAuth(true);
      return alert('정상적으로 인증되었습니다!');
    }
    BaseActions.changeMoreAuth(false);
    return alert('인증번호 확인 및 재전송 해주세요!');
  }

  checkValidations = () => {
    const {
      name,
      tel,
      isAuthenticated,
      category,
      career,
      profile_img,
      biz,
      desc,
      classTF,
      showTF,
      userType
    } = this.props;
    
    const telReg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    
    if(name.length === 0) {
      alert('이름은 필수사항입니다!');
      return false;
    } else if(tel.length === 0 || !telReg.test(tel)) {
      alert('전화번호는 필수사항입니다! (ex. 010-1234-1234)');
      return false;
    } else if(!isAuthenticated){
      alert('인증번호 전송후 인증번호를 확인해주세요!');
      return false;
    }
    
    if(userType === 'S') {
      if(category.length === 0 || category === "0") {
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
    }
    return true;
  }

  getSellerCategory = async () => {
    const { BaseActions } = this.props;
    await BaseActions.callSellerCategory();
  }

  getAuthNumber = async (tel) => {
    const { BaseActions } = this.props;
    await BaseActions.getAuthNumber(tel);
    const { authInfo } = this.props;
    if(!authInfo.get('isSent')) return alert(authInfo.get('message'));
    return alert('정상적으로 전송되었습니다. 인증번호를 확인해주세요!');
  }

  componentDidMount() {
    this.getSellerCategory();
  }

  render() {
    const { visible, sellerCategory, userType, modalNickname } = this.props;
    if(!sellerCategory.length) return null;
    const { onChangeValue, onSignup, onCancel, onMovePrev, getAuthNumber, checkAuthNum } = this;
    return (
      <SignupMoreDataModal 
        visible={visible}
        onChangeValue={onChangeValue}
        onSignup={onSignup}
        onCancel={onCancel}
        onMovePrev={onMovePrev}
        sellerCategory={sellerCategory}
        userType={userType}
        nickName={modalNickname}
        getAuthNumber={getAuthNumber}
        checkAuthNum={checkAuthNum}
      />
    );
  }
}

export default connect(
  (state) => ({
    nickName: state.base.get('nickName'),
    visible: state.base.getIn(['modal', 'signupMore']),
    sellerCategory: state.base.getIn(['signupMoreModal', 'sellerCategory']),
    name: state.base.getIn(['signupMoreModal', 'name']),
    tel: state.base.getIn(['signupMoreModal', 'tel']),
    isAuthenticated: state.base.getIn(['signupMoreModal', 'isAuthenticated']),
    checkNum: state.base.getIn(['signupMoreModal', 'checkNum']),
    authInfo: state.base.getIn(['signupMoreModal', 'authInfo']),
    category: state.base.getIn(['signupMoreModal', 'category_id']),
    career: state.base.getIn(['signupMoreModal', 'career']),
    sns: state.base.getIn(['signupMoreModal', 'sns']),
    profile_img: state.base.getIn(['signupMoreModal', 'profileImg']),
    biz: state.base.getIn(['signupMoreModal', 'biz_YN']),
    desc: state.base.getIn(['signupMoreModal', 'seller_desc']),
    classTF: state.base.getIn(['signupMoreModal', 'class_TF']),
    showTF: state.base.getIn(['signupMoreModal', 'show_TF']),
    modalEmail: state.base.getIn(['signupModal', 'email']),
    modalNickname: state.base.getIn(['signupModal', 'nickName']),
    modalPassword: state.base.getIn(['signupModal', 'password']),
    userType: state.base.getIn(['signupTypeModal', 'type'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(SignupMoreDataModalContainer);