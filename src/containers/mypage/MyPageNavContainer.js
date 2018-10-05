import React, { Component } from 'react';
import MyPageNav from 'components/mypage/MyPageNav';
import withMyPageHOC from 'containers/mypage/mypageHOC/WithMyPageHOC';
class MyPageNavContainer extends Component {

  
  render() {
    return (
      <MyPageNav/>
    );
  }
}

export default (MyPageNavContainer);