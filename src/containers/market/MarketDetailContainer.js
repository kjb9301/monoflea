import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'; 
import MarketDetailModal from 'components/modal/MarketDetailModal';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class MarketDetailContainer extends Component {

  handleChange = (e) => {
    const {MarketUIActions} = this.props;
    const {name,value} = e.target;
    MarketUIActions.changeInput({name,value});
  }

  handleEdit = () => {
    const {MarketUIActions,editTF} = this.props;
    MarketUIActions.editTF(editTF);
  }

  handleClose = () => {
    const {MarketUIActions} = this.props;
    MarketUIActions.hideModal('market');
  }

  handleCancel = (id) => {
    const {MarketUIActions,list,editTF} = this.props;
    const idx = list.marketList.findIndex(market => market.market_id === id);
    const marketDetail = list.marketList[idx];
    MarketUIActions.editTF(editTF);
    MarketUIActions.hideModal('market');
    MarketUIActions.showModal('market');
    MarketUIActions.getValue({marketDetail});
  }

  handleUpdate = async (id,editTF) => {
    const {MarketActions,MarketUIActions,marketDetail} = this.props;
    await MarketActions.updateMarket(id,marketDetail.toJS());
    const {message} = this.props;
    alert(message);
    MarketUIActions.editTF(editTF);
  }

  handleAskRemove = () => {
    const {MarketUIActions} = this.props;
    MarketUIActions.showModal('remove');
  }

  handleApplyModal = (id) => {
    const {MarketActions,MarketUIActions} = this.props;
    MarketUIActions.showModal('apply');
    MarketActions.getApplyList(id);
  }

  handleApply = async (id,applyTF) => {
    const {nickName,MarketActions,MarketUIActions,list} = this.props;
    await MarketActions.applyMarket(id);
    MarketUIActions.applyTF(applyTF);
    await MarketActions.getMarketList();
    
    const idx = list.marketRegList.findIndex(market => market.market_id === id);
    const marketDetail = list.marketRegList[idx];

    MarketUIActions.hideModal('market');
    MarketUIActions.getValue({marketDetail});
    MarketUIActions.showModal('market');
  }

  handleApplyCancel = async (id,applyTF) => {
    const {nickName,MarketActions,MarketUIActions,list} = this.props;
    MarketActions.applyCancel(id,nickName);
    MarketUIActions.applyTF(applyTF);
    await MarketActions.getMarketList();
    
    const idx = list.marketRegList.findIndex(market => market.market_id === id);
    const marketDetail = list.marketRegList[idx];

    MarketUIActions.hideModal('market');
    MarketUIActions.getValue({marketDetail});
    MarketUIActions.showModal('market');
  }

  render() {
    const {loading,visible,marketDetail,editTF,userType,applyTF} = this.props;
    const {handleChange,handleEdit,handleClose,handleUpdate,handleAskRemove,handleCancel,handleApplyModal,handleApply,handleApplyCancel} = this;
    const detailInfo = marketDetail.toJS();
    if(loading) return null;
    return (
      <div>
        <MarketDetailModal 
              userType={userType}
              visible={visible} 
              marketDetail={detailInfo} 
              onChange={handleChange} 
              editTF={editTF}
              applyTF={applyTF} 
              onEdit={handleEdit}
              onClose={handleClose}
              onUpdate={handleUpdate}
              onAskRemove={handleAskRemove}
              onCancel={handleCancel}
              onApplyModal={handleApplyModal}
              onApply={handleApply}
              onApplyCancel={handleApplyCancel}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    list: state.market.get('data'),
    userType: state.base.get('userType'),
    logged: state.base.get('logged'),
    nickName: state.base.get('nickName'),
    list: state.market.get('data'),
    message: state.market.get('message'),
    visible: state.marketUI.getIn(['modal','market']),
    marketDetail: state.marketUI.get('market'),
    editTF: state.marketUI.get('editTF'),
    applyTF: state.marketUI.get('applyTF'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketActions: bindActionCreators(marketActions,dispatch),
    MarketUIActions: bindActionCreators(marketUIActions,dispatch)
  })
)(MarketDetailContainer);