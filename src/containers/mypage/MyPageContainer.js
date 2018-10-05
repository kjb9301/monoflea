import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import MypageWrapper from '../../components/mypage/MyPageWrapper/MyPageWrapper';

class MyPageContainer extends Component {
  render() {
    return (
      <div>
        <MypageWrapper/>
      </div>
    );
  }
}

export default MyPageContainer;