import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as baseActions from 'store/modules/base';
import * as mypageActions from 'store/modules/mypage';
import MyPageItemWrapper from '../../components/mypage/MyPageItemWrapper/MyPageItemWrapper';
import MypageMapModal from 'components/mypage/MypageMapModal';
import axios from 'axios';

class MyPageItemContainer extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    const { url } = this.props;
    return nextProps.url !== url;
  }
  
  openMap = (id) => {
    const { BaseActions, MypageActions } = this.props;
    MypageActions.getMarketPlace(id)
      .then(() => {
        BaseActions.showModal('myPageMap');
      });
  }

  closeMap = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('myPageMap'); 
  }
  
  render() {
    const  { data, navList, visible, marketMap } = this.props;
    const { openMap, closeMap } = this;
    console.log(navList);
    return (
      <Fragment>
        <MyPageItemWrapper
          data ={data}
          navList = {navList}
          openMap={openMap}
        />
        <MypageMapModal visible={visible} closeMap={closeMap} marketMap={marketMap}/>
       </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    url : state.mypage.get('url'),
    navList : state.mypage.get('navList'),
    data : state.mypage.get('data'),
    visible: state.base.getIn(['modal', 'myPageMap']),
    marketMap: state.mypage.get('marketPlace')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(MyPageItemContainer)