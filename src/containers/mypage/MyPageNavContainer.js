import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MyPageNav from 'components/mypage/MyPageNav';
import withMyPageHOC from 'containers/mypage/mypageHOC/WithMyPageHOC';
import * as mypageActions from 'store/modules/mypage';
class MyPageNavContainer extends Component {

  state = {
    urls : ['a', 'b', 'c' ,'/mypages/apply-markets','e'],
    navs : ['1', '2', '3', '신청마켓' , '5'],
  }
  getData = (url) => {
    const { MypageActions, seller_id} = this.props;
    MypageActions.getMypageData(url,seller_id);
  }
  
  render() {
    const { urls ,navs } = this.state;
    const { getData } = this;
    return (
      <MyPageNav
        urls = {urls}
        getData = {getData}
        navs = {navs}
      />
    );
  }
}

// export default withMyPageHOC('https://jsonplaceholder.typicode.com/posts/1')(MyPageNavContainer);
export default connect(
  (state) => ({
    seller_id : state.base.get('seller_id')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch)
  })
)(MyPageNavContainer);