import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as mypageActions from 'store/modules/mypage';
import MyPageItemWrapper from '../../components/mypage/MyPageItemWrapper/MyPageItemWrapper';

class MyPageItemContainer extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    const { url } = this.props;
    return nextProps.url !== url;
  }
  
  render() {
    const  { data, url} = this.props;
    return (
       <MyPageItemWrapper
        data ={data}
        url = {url}
       />
    );
  }
}

export default connect(
  (state) => ({
    url : state.mypage.get('url'),
    data : state.mypage.get('data')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch)
  })
)(MyPageItemContainer)