import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as mypageActions from 'store/modules/mypage';
import MyPageItemWrapper from '../../components/mypage/MyPageItemWrapper/MyPageItemWrapper';

class MyPageItemContainer extends Component {
  
  
  render() {
    const  { data} = this.props;
    
    return (
       <MyPageItemWrapper
        data ={data}
       />
    );
  }
}

export default connect(
  (state) => ({
    // seller_id : state.base.get('seller_id')
    seller_id : state.base.get('seller_id'),
    data : state.mypage.get('data')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch)
  })
)(MyPageItemContainer)