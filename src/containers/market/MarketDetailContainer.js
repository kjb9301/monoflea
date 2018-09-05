import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import MarketList from 'components/market/MarketList';
import Button from 'components/common/Button/Button';
import MarketRegButton from 'components/market/MarketRegButton/MarketRegButton'; 
import MarketDetailModal from 'components/modal/MarketDetailModal';
import AskRemoveModal from 'components/modal/AskRemoveModal';

import * as listActions from 'store/modules/marketList';
import * as detailActions from 'store/modules/marketDetail';
import * as modalActions from 'store/modules/modalVisible';

class MarketDetailContainer extends Component {

  modalName = 'market';

  handleChange = (e) => {
    const {ModalActions,marketDetail} = this.props;
    const {name,value} = e.target;
    const {modalName} = this;
    ModalActions.changeInput({modalName,name,value});
  }

  handleEdit = () => {
    const {ModalActions } = this.props;
    ModalActions.editTF();
  }

  handleClose = () => {
    const {ModalActions} = this.props;
    const {modalName} = this;
    ModalActions.hideModal(modalName);
  }

  handleUpdate = (id) => {
    const {ListActions,marketDetail} = this.props;
    ListActions.updateMarket(id,marketDetail.toJS());
  }
  /*
  getMarketList = () => {
    const {ListActions} = this.props;
    ListActions.getMarketList();
  }

  handleDetail = (id) => {
    const {DetailActions,ModalActions,list} = this.props;
    const idx = list.marketList.findIndex(market => market.market_id === id);
    const marketDetail = list.marketList[idx];
    const modalName = 'market';
    ModalActions.showModal({modalName,marketDetail});
    DetailActions.getMarketDetail(id);
  }

  handleSelect = (category) => {
    const {ListActions} = this.props;
    ListActions.getMarketList(category);
  }

  handleCancel = () => {
    const {ModalActions} = this.props;
    ModalActions.hideModal('market');
  }

  handleRemove = async (id) => {
    const {ModalActions,ListActions} = this.props;
    ModalActions.hideModal('remove');
    await ListActions.removeMarket(id);
    const { message } = this.props;
    ModalActions.hideModal('market');
    ListActions.getMarketList();
    alert(message);
  }

  handleAskRemove = () => {
    const {ModalActions} = this.props;
    ModalActions.showModal('remove');d
  }

  AskRemoveCancel = () => {
    const {ModalActions} = this.props;
    ModalActions.hideModal('remove');
  }
  */

  render() {
    const {loading,detailVisible,marketDetail,editTF} = this.props;
    const {handleChange,handleEdit,handleClose,handleUpdate} = this;
    /* const {handleDetail,handleSelect,handleCancel,handleRemove,handleAskRemove,AskRemoveCancel} = this;
    const id = marketDetail.market_id;
    const date = new Date();
    const curGetTime = date.getTime(); */

    if(loading) return null;
    const DetailInfo = marketDetail.toJS();
    return (
      <div>
        <MarketDetailModal 
              visible={detailVisible} 
              marketDetail={DetailInfo} 
              handleChange={handleChange} 
              editTF={editTF} 
              onEdit={handleEdit}
              onClose={handleClose}
              onUpdate={handleUpdate}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    list: state.marketList.get('data'),
    detailVisible: state.modalVisible.getIn(['modal','market']),
    marketDetail: state.modalVisible.get('market'),
    editTF: state.modalVisible.get('editTF'),
    /* message: state.marketList.get('message'),
    removeVisible: state.modalVisible.getIn(['modal','remove']),
    
    marketComingList: state.marketList.get('marketComingList'),
    marketDetail: state.marketDetail.get('marketDetail'), */
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    ModalActions: bindActionCreators(modalActions,dispatch),
    ListActions: bindActionCreators(listActions,dispatch)
    /* DetailActions: bindActionCreators(detailActions,dispatch),
    ModalActions: bindActionCreators(modalActions,dispatch) */
  })
)(withRouter(MarketDetailContainer));