import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import MarketList from 'components/market/MarketList';
import Button from '../../components/common/Button/Button';

import * as listActions from 'store/modules/marketList';

class MarketListContainer extends Component {
  getMarketList = () => {
    const {ListActions} = this.props;
    ListActions.getMarketList();
  }

  handleClick = (category) => {
    const {ListActions} = this.props;
    ListActions.getMarketList();
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {loading,markets} = this.props;
    if(loading) return null;
    return (
      <div>
        <MarketList markets={markets}>
          <Button onSearch={this.handleClick}>기간별</Button>
          {/* <Button onClick={this.handleClick}>기간별</Button> */}
        </MarketList>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    markets: state.marketList.get('markets'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions,dispatch)
  })
)(MarketListContainer);