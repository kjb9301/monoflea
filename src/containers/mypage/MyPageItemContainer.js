import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as mypageActions from 'store/modules/mypage';
import MyPageItemWrapper from '../../components/mypage/MyPageItemWrapper/MyPageItemWrapper';

class MyPageItemContainer extends Component {
  
  
  render() {
    const  { data, navList} = this.props;
    console.log(navList);
    return (
       <MyPageItemWrapper
        data ={data}
        navList = {navList}
       />
    );
  }
}

export default connect(
  (state) => ({
    navList : state.mypage.get('navList'),
    data : state.mypage.get('data')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch)
  })
)(MyPageItemContainer)