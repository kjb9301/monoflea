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
    const {ModalActions} = this.props;
    const {name,value} = e.target;
    const {modalName} = this;
    console.log(this.props.marketDetail.market_name);

    // ModalActions.changeInput({modalName,name,value});
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
    ModalActions.showModal('remove');
  }

  AskRemoveCancel = () => {
    const {ModalActions} = this.props;
    ModalActions.hideModal('remove');
  }
  */

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.list === this.props.list ? false : true; 
  // }

  render() {
    const {loading,detailVisible,marketDetail} = this.props;
    const {handleDetail,handleChange} = this;
    /* const {handleDetail,handleSelect,handleCancel,handleRemove,handleAskRemove,AskRemoveCancel} = this;
    const id = marketDetail.market_id;
    const date = new Date();
    const curGetTime = date.getTime(); */

    if(loading) return null;
    return (
      <div>
        <MarketDetailModal visible={detailVisible} marketDetail={marketDetail} handleChange={handleChange}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    list: state.marketList.get('data'),
    // detailVisible: state.modalVisible.getIn(['modal','market']),
    detailVisible: state.modalVisible.getIn(['modal','market']),
    marketDetail: state.modalVisible.get('market'),
    /* message: state.marketList.get('message'),
    removeVisible: state.modalVisible.getIn(['modal','remove']),
    
    marketComingList: state.marketList.get('marketComingList'),
    marketDetail: state.marketDetail.get('marketDetail'), */
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    ModalActions: bindActionCreators(modalActions,dispatch)
    /* DetailActions: bindActionCreators(detailActions,dispatch),
    ModalActions: bindActionCreators(modalActions,dispatch) */
  })
)(withRouter(MarketDetailContainer));