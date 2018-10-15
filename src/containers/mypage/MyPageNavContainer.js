import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MyPageNav from 'components/mypage/MyPageNav';
import withMyPageHOC from 'containers/mypage/mypageHOC/WithMyPageHOC';
import * as mypageActions from 'store/modules/mypage';
class MyPageNavContainer extends Component {

  state = {
    urls : ['a', '/mypages/host-markets', 'c' ,'/mypages/apply-markets','e'],
    navs : ['프로필', '주최마켓', '주최클래스', '신청마켓' , '신청클래스'],
  }
  getData = (url,id) => {
    const { MypageActions, } = this.props;
    MypageActions.getMypageData(url, id);
  }
  
  // componentDidMount(){
  //   const{ seller_id } = this.props;
  //   console.log(seller_id)
  //   this.getData('/users/login', seller_id);
  // }
  render() {
    const { urls ,navs, } = this.state;
    const { seller_id, host_id, user_id } = this.props;
    const { getData } = this;
    console.log(host_id);
    return (
      <MyPageNav
        urls = {urls}
        getData = {getData}
        navs = {navs}
        seller_id = {seller_id}
        host_id = {host_id}
        user_id = {user_id}
      />
    );
  }
}

// export default withMyPageHOC('https://jsonplaceholder.typicode.com/posts/1')(MyPageNavContainer);
export default connect(
  (state) => ({
    seller_id : state.base.get('seller_id'),
    host_id : state.base.get('host_id'),
    user_id : state.base.get('user_id')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch)
  })
)(MyPageNavContainer);