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
    const { url, marketMap, visible, editTF } = this.props;
    return nextProps.url !== url
        || nextProps.marketMap !== marketMap
        || nextProps.visible !== visible
        || nextProps.editTF !== editTF;
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

  handleEdit = () => {
    const { MypageActions, editTF } = this.props;
    MypageActions.toggleEdit(editTF);
  }
  
  render() {
    const  { data, navList, url, visible, marketMap, editTF } = this.props;
    const { openMap, closeMap, handleEdit } = this;
    return (
      <Fragment>
        <MyPageItemWrapper
          data ={data}
          url = {url}
          openMap={openMap}
          toggleEdit={handleEdit}
          editTF={editTF}
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
    marketMap: state.mypage.get('marketPlace'),
    editTF: state.mypage.get('editTF')
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(MyPageItemContainer)