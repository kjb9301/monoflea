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

  handleCancel = () => {
    const {MarketUIActions,editTF} = this.props;
    MarketUIActions.editTF(editTF);
    MarketUIActions.hideModal('market');
    MarketUIActions.showModal('market');
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

  render() {
    const {loading,visible,marketDetail,editTF} = this.props;
    const {handleChange,handleEdit,handleClose,handleUpdate,handleAskRemove} = this;
    const detailInfo = marketDetail.toJS();
    if(loading) return null;
    return (
      <div>
        <MarketDetailModal 
              visible={visible} 
              marketDetail={detailInfo} 
              onChange={handleChange} 
              editTF={editTF} 
              onEdit={handleEdit}
              onClose={handleClose}
              onUpdate={handleUpdate}
              onAskRemove={handleAskRemove}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    message: state.market.get('message'),
    visible: state.marketUI.getIn(['modal','market']),
    marketDetail: state.marketUI.get('market'),
    editTF: state.marketUI.get('editTF'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketUIActions: bindActionCreators(marketUIActions,dispatch),
    MarketActions: bindActionCreators(marketActions,dispatch)
  })
)(MarketDetailContainer);