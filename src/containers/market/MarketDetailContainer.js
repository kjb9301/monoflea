import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'; 
import {withRouter} from 'react-router';
import MarketDetailModal from 'components/modal/MarketDetailModal';
import axios from 'axios';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

const bodyData = new FormData();

class MarketDetailContainer extends Component {

  handleChange = (e) => {
    const { MarketUIActions } = this.props;
    const { name, value } = e.target;
    bodyData.set(name, value);
    MarketUIActions.changeInput({ name, value });
  }

  handleEdit = () => {
    const {MarketUIActions,editTF} = this.props;
    MarketUIActions.editTF(editTF);
  }

  handleClose = () => {
    const {MarketUIActions,editTF} = this.props;
    if(editTF) MarketUIActions.editTF(editTF);
    MarketUIActions.hideModal('market');
  }

  handleCancel = (id,confirmYN) => {
    const {MarketUIActions,list,editTF,savedDate} = this.props;

    axios.get(`/markets?confirm=${confirmYN}&selectDate=${savedDate}&limit=${list.marketList.length}`)
      .then(list => {
        const { marketList } = list.data;  
        const idx = marketList.findIndex(market => market.market_id === id);
        const marketDetail = marketList[idx];

        MarketUIActions.editTF(editTF);
        MarketUIActions.hideModal('market');
        MarketUIActions.showModal('market');
        MarketUIActions.getValue({marketDetail});
      });
  }

  handleUpdate = async (id,editTF) => {
    const {MarketActions,MarketUIActions,marketInfo} = this.props;
    // const marketDetail = marketInfo.toJS();
    // await MarketActions.updateMarket(id, marketDetail);
    await MarketActions.updateMarket(id, bodyData);
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
    MarketActions.getApplyList(id)
      .then(() => {
        MarketUIActions.showModal('apply');
      })
      .catch(err => console.log(err));
  }

  handleApply = async (id) => {
    const {MarketActions,MarketUIActions} = this.props;
    await MarketActions.applyMarket(id);
    await MarketActions.getMarketList('N','undefined',this.props.list.marketList.length+8);
    const {list,message} = this.props;
    const idx = list.marketList.findIndex(market => market.market_id === id);
    const marketDetail = list.marketList[idx];
    await MarketUIActions.getValue({marketDetail});
    MarketUIActions.hideModal('market');
    MarketUIActions.showModal('market');
    alert(message);
  }

  handleApplyCancel = async (id) => {
    const {MarketActions,MarketUIActions} = this.props;
    MarketActions.applyCancel({id});
    await MarketActions.getMarketList('N','undefined',this.props.list.marketList.length+8);
    const {list,message} = this.props; 
    const idx = list.marketList.findIndex(market => market.market_id === id);
    const marketDetail = list.marketList[idx];
    MarketUIActions.getValue({marketDetail});
    MarketUIActions.hideModal('market');
    MarketUIActions.showModal('market');
    alert(message);
  }

  handleApplyClose = (id) => {
    const {MarketActions,MarketUIActions} = this.props;
    MarketActions.applyClose(id)
      .then(() => {
        const {history,message} = this.props;
        alert(message);
        MarketUIActions.hideModal('market');
        history.push('/markets');
      })
      .catch(err => {
        const { message } = err.response;
        alert(message);
      });
  }

  render() {
    const {loading,visible,marketInfo,editTF,userType,user_host_id} = this.props;
    const {handleChange,handleEdit,handleClose,handleUpdate,handleAskRemove,handleCancel,handleApplyModal,handleApply,handleApplyCancel,handleApplyClose} = this;
    const detailInfo = marketInfo.toJS();

    if(loading) return null;
    return (
      <div>
        <MarketDetailModal 
          userType={userType}
          user_host_id={user_host_id}
          visible={visible} 
          marketDetail={detailInfo} 
          onChange={handleChange} 
          editTF={editTF}
          onEdit={handleEdit}
          onClose={handleClose}
          onUpdate={handleUpdate}
          onAskRemove={handleAskRemove}
          onCancel={handleCancel}
          onApplyModal={handleApplyModal}
          onApply={handleApply}
          onApplyCancel={handleApplyCancel}
          onApplyClose={handleApplyClose}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    list: state.market.get('data'),
    userType: state.base.get('userType'),
    savedDate: state.marketUI.get('savedDate'),
    logged: state.base.get('logged'),
    user_host_id: state.base.get('host_id'),
    message: state.market.get('message'),
    visible: state.marketUI.getIn(['modal','market']),
    marketInfo: state.marketUI.get('market'),
    editTF: state.marketUI.get('editTF'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketActions: bindActionCreators(marketActions,dispatch),
    MarketUIActions: bindActionCreators(marketUIActions,dispatch)
  })
)(withRouter(MarketDetailContainer));