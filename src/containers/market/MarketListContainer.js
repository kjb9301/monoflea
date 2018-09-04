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
    const {updateTF,detailVisible,removeVisible,loading,marketList,marketComingList,marketDetail} = this.props;
    //const {id,name,place,poster,period,endDate,desc} = this.props;
    const {handleDetail,handleSelect,handleCancel,handleRemove,handleAskRemove,AskRemoveCancel,handleUpdateTF,handleUpdate,handleChange} = this;
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
        <MarketDetailModal id={id} visible={detailVisible} marketDetail={marketDetail} onCancel={handleCancel} onAskRemove={handleAskRemove} onUpdateTF={handleUpdateTF} updateTF={updateTF} onUpdate={handleUpdate} onChange={handleChange}/>
        <AskRemoveModal id={id} visible={removeVisible} onRemove={handleRemove} onCancel={AskRemoveCancel}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    updateTF: state.marketDetail.get('updateTF'),
    message: state.marketList.get('message'),
    detailVisible: state.modalVisible.getIn(['modal','market']),
    removeVisible: state.modalVisible.getIn(['modal','remove']),
    marketList: state.marketList.get('marketList'),
    marketComingList: state.marketList.get('marketComingList'),
    marketDetail: state.marketDetail.get('marketDetail'),
    /* name: state.marketDetail.getIn(['marketDetail', 'name']),
    id: state.marketDetail.getIn(['marketDetail','id']),
    place: state.marketDetail.getIn(['marketDetail','place']),
    poster: state.marketDetail.getIn(['marketDetail','poster']),
    period: state.marketDetail.getIn(['marketDetail','period']),
    endDate: state.marketDetail.getIn(['marketDetail','endDate']),
    desc: state.marketDetail.getIn(['marketDetail','desc']), */
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions,dispatch),
    DetailActions: bindActionCreators(detailActions,dispatch),
    ModalActions: bindActionCreators(modalActions,dispatch)
  })
)(withRouter(MarketListContainer));