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

  HandleDeleteApply = (seller_id,market_id) => {
    const {MarketActions,MarketUIActions} = this.props;
    if(window.confirm("해당 셀러를 목록에서 제거하시겠습니까?")){
      MarketActions.applyDelete({seller_id,market_id})
        .then(() => {
          MarketUIActions.hideModal('apply');
          MarketUIActions.showModal('apply');
          MarketActions.getApplyList(market_id);
          alert('해당 셀러를 목록에서 제거 하였습니다.');
        })
        .catch(err => {
          console.log(err);
        });
    }
    return;
  }

  render() {
    const {visible,loading,applyListData} = this.props;
    const {HandleClose,HandleDeleteApply} = this;
    if(loading) return null;
    return (
      <div>
        <ApplyListModal 
          visible={visible} 
          applyListData={applyListData}
          onClose={HandleClose}
          onDeleteApply={HandleDeleteApply}
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