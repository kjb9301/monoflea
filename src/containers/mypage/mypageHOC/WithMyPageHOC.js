import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mypageActions from 'store/modules/seller';
const withMyPageHOC = (number) => (WrappedComponent) => {
  return class extends Component {
    state = {
      number
    }
    getDataList = () =>{

    }
    render() {
      return (
        <WrappedComponent/>
      );
    }
  }  
}
export default connect(
  (state)=> ({
    data : state.mypage.get('data')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch)
  })
)(withMyPageHOC); 