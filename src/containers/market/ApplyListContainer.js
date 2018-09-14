import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'; 
import ApplyListModal from 'components/modal/ApplyListModal';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class ApplyListContainer extends Component {
  HandleClose = () => {
    const {MarketUIActions} =this.props;
    MarketUIActions.hideModal('apply');
  }

  render() {
    const {visible,loading,applyListData} = this.props;
    const {HandleClose} = this;
    if(loading) return null;
    return (
      <div>
        <ApplyListModal 
          visible={visible} 
          applyListData={applyListData}
          onClose={HandleClose}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    applyListData: state.market.get('applyList'),
    visible: state.marketUI.getIn(['modal','apply']),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketActions: bindActionCreators(marketActions,dispatch),
    MarketUIActions: bindActionCreators(marketUIActions,dispatch)
  })
)(ApplyListContainer);