import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';

import * as detailActions from 'store/modules/marketDetail';
import MarketDetailModal from 'components/modal/MarketDetailModal/MarketDetailModal';

class MarketDetailContainer extends Component {
  getMarketDetail = () => {
    const {DetailActions,match} = this.props;
    const {id} = match.params;
    DetailActions.getMarketDetail(id);
  }

  componentDidMount() {
    this.getMarketDetail();
  }

  render() {
    const {marketDetail,loading} = this.props;
    console.log(marketDetail);
    if(loading) return null;
    return (
      <MarketDetailModal marketDetail={marketDetail}/>
    );
  }
}

export default connect(
  (state) => ({
    marketDetail: state.marketDetail.get('marketDetail'),
    loading: state.pender.pending['markets/GET_MARKET_DETAIL']
  }),
  (dispatch) => ({
    DetailActions: bindActionCreators(detailActions,dispatch)
  })
)(withRouter(MarketDetailContainer));