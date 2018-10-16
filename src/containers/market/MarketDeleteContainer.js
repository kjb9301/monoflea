import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
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
    const { message, location } = this.props;
    alert(message);
    MarketUIActions.hideModal('market');
    const { list, savedDate } = this.props;
    const confirm = (location.pathname === '/markets'? 'Y' : 'N');
    MarketActions.getMarketList(confirm,savedDate,list.marketList.length);
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
    list: state.market.get('data'),
    savedDate: state.marketUI.get('savedDate'),
    message: state.market.get('message'),
    visible: state.marketUI.getIn(['modal','remove']),
    marketDetail: state.marketUI.get('market'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketUIActions: bindActionCreators(marketUIActions,dispatch),
    MarketActions: bindActionCreators(marketActions,dispatch)
  })
)(withRouter(MarketDetailContainer));