import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MyPageNav from 'components/mypage/MyPageNav';
import withMyPageHOC from 'containers/mypage/mypageHOC/WithMyPageHOC';
import * as mypageActions from 'store/modules/mypage';
class MyPageNavContainer extends Component {

  getData = (url,id) => {
    const { MypageActions, } = this.props;
    MypageActions.getMypageData(url, id);
  }

  getNavList = () => {
    const {MypageActions, seller_id, host_id,navList, user_id ,sellerNavs, defaultNavs, hostNavs} = this.props;
     console.log(host_id);
    console.log(seller_id)
    console.log(user_id);
    host_id !== null ?  MypageActions.getNavListHost() :
                seller_id !== null ?  MypageActions.getNavListSeller() :
                MypageActions.getNavListUser();
  }
  componentDidMount(){
    this.getNavList();
  }
  render() {
    const { MypageActions , seller_id, host_id, user_id ,navList,  sellerNavs, defaultNavs, hostNavs} = this.props;
    const { getData, getNavList } = this;
    if(!navList) return null;
    return (
      <MyPageNav
      getData = {getData}
      navs = {navList}
      seller_id = {seller_id}
      host_id = {host_id}
      user_id = {user_id}
    />
    );
  }
}

export default connect(
  (state) => ({
    seller_id : state.base.get('seller_id'),
    host_id : state.base.get('host_id'),
    user_id : state.base.get('user_id'),
    sellerNavs : state.mypage.get('sellerNavs'),
    defaultNavs : state.mypage.get('defaultNav'),
    hostNavs : state.mypage.get('hostNav'),
    navList : state.mypage.get('navList')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch),
  })
)(MyPageNavContainer);