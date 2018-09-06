import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import AskRemoveModal from 'components/modal/AskRemoveModal';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class MarketDetailContainer extends Component {

  handleClose = () => {
    const {MarketUIActions} = this.props;
    MarketUIActions.hideModal('remove');
  }

  handleRemove = async (id) => {
    const {MarketUIActions,MarketActions} = this.props;
    MarketUIActions.hideModal('remove');
    await MarketActions.deleteMarket(id);
    const { message } = this.props;
    MarketUIActions.hideModal('market');
    MarketActions.getMarketList();
    alert(message);
  }

  render() {
    const {loading,visible,marketDetail} = this.props;
    const {handleClose,handleRemove} = this;
    const detailInfo = marketDetail.toJS();
    const market_id = detailInfo.market_id;
    if(loading) return null;
    return (
      <div>
        <AskRemoveModal
              id={market_id}
              visible={visible}
              onRemove={handleRemove}
              onClose={handleClose}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    message: state.market.get('message'),
    visible: state.marketUI.getIn(['modal','remove']),
    marketDetail: state.marketUI.get('market'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketUIActions: bindActionCreators(marketUIActions,dispatch),
    MarketActions: bindActionCreators(marketActions,dispatch)
  })
)(MarketDetailContainer);