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

  handleDetail = (id) => {
    const {DetailActions,ModalActions,list} = this.props;
    const idx = list.marketList.findIndex(market => market.market_id === id);
    const marketDetail = list.marketList[idx];
    const modalName = 'market';
    ModalActions.showModal({modalName,marketDetail});
    //DetailActions.getMarketDetail(id);
  }
/*
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

  handleUpdateTF = () => {
    const {DetailActions} = this.props;
    DetailActions.updateTF();
  }

  handleUpdate = (id) => {
    const {DetailActions} = this.props;
    DetailActions.updateMarket(id);
  }

  componentDidMount() {
    this.getMarketList();
  }

  handleChange = (e) => {
    const {DetailActions} = this.props;
    const {value,name} = e.target;
    console.log(value);
    DetailActions.updateInput({name,value});


    /* if(name === 'poster'){
      DetailActions.updatePoster(value);
    }else if(name === 'name'){
      DetailActions.updateName(value);
    }else if(name === 'place'){
      DetailActions.updatePlace(value);
    }else if(name === 'period'){
      DetailActions.updatePeriod(value);
    }else if(name === 'endDate'){
      DetailActions.updateEndDate(value);
    }else if(name === 'desc'){
      DetailActions.updateDesc(value);
    } */
  }

  render() {
    const {list,loading,detailVisible,marketDetail} = this.props;
    const {marketList,marketComingList} = list;
    const {handleDetail} = this;
    /* const {handleDetail,handleSelect,handleCancel,handleRemove,handleAskRemove,AskRemoveCancel} = this;
    const id = marketDetail.market_id;
    const date = new Date();
    const curGetTime = date.getTime(); */

    if(loading) return null;
    return (
      <div>
        <MarketList markets={marketComingList}/>
        <MarketList markets={marketList} onDetail={handleDetail}/>
        {/* <MarketDetailModal visible={detailVisible} marketDetail={marketDetail}/> */}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    list: state.marketList.get('data'),
    detailVisible: state.modalVisible.getIn(['modal','market']),
    marketDetail: state.modalVisible.get('market'),
    /* message: state.marketList.get('message'),
    removeVisible: state.modalVisible.getIn(['modal','remove']),
    
    marketComingList: state.marketList.get('marketComingList'),
    marketDetail: state.marketDetail.get('marketDetail'), */
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions,dispatch),
    ModalActions: bindActionCreators(modalActions,dispatch)
    /* DetailActions: bindActionCreators(detailActions,dispatch),
    ModalActions: bindActionCreators(modalActions,dispatch) */
  })
)(withRouter(MarketListContainer));