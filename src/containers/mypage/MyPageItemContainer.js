import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as baseActions from 'store/modules/base';
import * as mypageActions from 'store/modules/mypage';
import * as marketActions from 'store/modules/market';

import * as marketUIActions from 'store/modules/marketUI';
import MyPageItemWrapper from '../../components/mypage/MyPageItemWrapper/MyPageItemWrapper';
import MypageMapModal from 'components/mypage/MypageMapModal';
import ApplyListModal from 'components/modal/ApplyListModal';

import * as classUIActions from 'store/modules/classUI';

import axios from 'axios';

class MyPageItemContainer extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    const { url, marketMap, visible, editTF, applyVisible, userProfile } = this.props;
    return nextProps.url !== url
        || nextProps.marketMap !== marketMap
        || nextProps.visible !== visible
        || nextProps.editTF !== editTF
        || nextProps.applyVisible !== applyVisible
        || nextProps.userProfile !== userProfile;
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
    const { MypageActions, editTF, data } = this.props;
    const { seller, nickName, tel } = data;
    const profile_img = seller ? seller.profile_img : null;
    profile_img ? MypageActions.setProfile({ profile_img, nickName, tel }) : MypageActions.setProfile({ nickName, tel });
    MypageActions.toggleEdit(editTF);
  }

  handleApplyModal = async (id) => {
    const {MarketUIActions, MypageActions} = this.props;
    axios.get(`/mypages/market-applyList?id=${id}`)
      .then((list) => {
        MypageActions.getApplyList(list.data);
        MarketUIActions.showModal('apply');
      })
      .catch(err => console.log(err));
  }

  closeApplyModal = () => {
    const {MarketUIActions} =this.props;
    MarketUIActions.hideModal('apply');
  }

  HandleDeleteApply = (seller_id,market_id) => {
    const {MarketActions,MarketUIActions} = this.props;
    if(window.confirm("해당 셀러를 목록에서 제거하시겠습니까?")){
      MarketActions.applyDelete({seller_id,market_id})
        .then(() => {
          MarketUIActions.hideModal('apply');
          MarketUIActions.showModal('apply');
          MarketActions.getApplyList(market_id);
          alert('해당 셀러를 목록에서 제거 하였습니다.');
        })
        .catch(err => {
          console.log(err);
        });
    }
    return;
  }
  
  showClassModal = async (id) =>{
    const { ClassUIActions, BaseActions } = this.props;
    const getDetailinfo = () => {
      return axios.get(`/classes/${id}`);
    }
    const classDetail = await getDetailinfo();
    ClassUIActions.setClassInfo(classDetail);
    return BaseActions.showModal('class');
  }

  changeProfileData = (e) => {
    const { name, value, file } = e.target;
    const { MypageActions } = this.props;
    MypageActions.changeProfile({ name, value });
  }

  updateProfile = async () => {
    const { userProfile, user_id, MypageActions, editTF } = this.props;
    await MypageActions.updateProfile(user_id, userProfile);
  }

  render() {
    const  { data, navList, url, visible, marketMap, editTF, applyVisible, applyData, userProfile } = this.props;
    const { 
      openMap, closeMap, handleEdit, handleApplyModal, 
      closeApplyModal, HandleDeleteApply, showClassModal, 
      changeProfileData, updateProfile 
    } = this;

    return (
      <Fragment>
        <MyPageItemWrapper
          data ={data}
          userProfile={userProfile}
          url = {url}
          openMap={openMap}
          toggleEdit={handleEdit}
          changeProfileData={changeProfileData}
          updateProfile={updateProfile}
          editTF={editTF}
          applyModal={handleApplyModal}
          showClassModal = {showClassModal}
        />
        <MypageMapModal visible={visible} closeMap={closeMap} marketMap={marketMap}/>
        <ApplyListModal visible={applyVisible} applyListData={applyData} onClose={closeApplyModal} onDeleteApply={HandleDeleteApply}/>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    url : state.mypage.get('url'),
    user_id: state.base.get('user_id'),
    data : state.mypage.get('data'),
    applyData: state.mypage.get('applyData'),
    visible: state.base.getIn(['modal', 'myPageMap']),
    applyVisible: state.marketUI.getIn(['modal','apply']),
    marketMap: state.mypage.get('marketPlace'),
    editTF: state.mypage.get('editTF'),
    categories: state.class.get('categories'),
    userProfile: state.mypage.get('userProfile'),
  }),
  (dispatch) => ({
    MypageActions : bindActionCreators(mypageActions,dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch),
    MarketActions: bindActionCreators(marketActions, dispatch),
    MarketUIActions: bindActionCreators(marketUIActions, dispatch),
    ClassUIActions : bindActionCreators(classUIActions , dispatch)
  })
)(MyPageItemContainer)