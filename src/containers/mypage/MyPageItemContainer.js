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
    const { url, marketMap, visible } = this.props;
    return nextProps.url !== url
        || nextProps.marketMap !== marketMap
        || nextProps.visible !== visible;
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
    const  { data, navList,url, visible, marketMap } = this.props;
    const { openMap, closeMap } = this;
    return (
      <Fragment>
        <MyPageItemWrapper
          data ={data}
          url = {url}
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
    data : state.mypage.get('data'),
    visible: state.base.getIn(['modal', 'myPageMap']),
    marketMap: state.mypage.get('marketPlace')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(MyPageItemContainer)