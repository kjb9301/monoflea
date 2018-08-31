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

class MarketListContainer extends Component {
  getMarketList = () => {
    const {ListActions} = this.props;
    ListActions.getMarketList();
  }

  handleSelect = (category) => {
    const {ListActions} = this.props;
    ListActions.getMarketList(category);
  }

  handleDetail = (id) => {
    const {DetailActions,ModalActions} = this.props;
    ModalActions.showModal('market');
    DetailActions.getMarketDetail(id);
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
    ModalActions.showModal('remove');
  }

  AskRemoveCancel = () => {
    const {ModalActions} = this.props;
    ModalActions.hideModal('remove');
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {detailVisible,removeVisible,loading,marketList,marketComingList,marketDetail} = this.props;
    const {handleDetail,handleSelect,handleCancel,handleRemove,handleAskRemove,AskRemoveCancel} = this;
    const id = marketDetail.market_id;
    const date = new Date();
    const curGetTime = date.getTime();

    if(loading) return null;
    return (
      <div>
        <MarketList markets={marketComingList} curGetTime={curGetTime} onDetail={handleDetail}/>
        <MarketList markets={marketList} curGetTime={curGetTime} onDetail={handleDetail}>
          <Button toGetData={handleSelect} onHandleParams = {'2018-08-30'}>기간별</Button>
          <MarketRegButton/>
        </MarketList>
        <MarketDetailModal visible={detailVisible} marketDetail={marketDetail} onCancel={handleCancel} onAskRemove={handleAskRemove}/>
        <AskRemoveModal id={id} visible={removeVisible} onRemove={handleRemove} onCancel={AskRemoveCancel}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    message: state.marketList.get('message'),
    detailVisible: state.modalVisible.getIn(['modal','market']),
    removeVisible: state.modalVisible.getIn(['modal','remove']),
    marketList: state.marketList.get('marketList'),
    marketComingList: state.marketList.get('marketComingList'),
    marketDetail: state.marketDetail.get('marketDetail'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions,dispatch),
    DetailActions: bindActionCreators(detailActions,dispatch),
    ModalActions: bindActionCreators(modalActions,dispatch)
  })
)(withRouter(MarketListContainer));