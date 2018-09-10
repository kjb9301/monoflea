import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import MarketRegButton from 'components/market/MarketRegButton/MarketRegButton';
import MarketRegList from 'components/market/MarketRegList/MarketRegList';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class MarketListRegContainer extends Component {
  render() {
    const {list,loading} = this.props;

    if(loading) return null;
    return (
      <div>
        <MarketRegButton/>
        <MarketRegList/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    list: state.market.get('data'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketActions: bindActionCreators(marketActions,dispatch),
    MarketUIActions: bindActionCreators(marketUIActions,dispatch)
  })
)(MarketListRegContainer);