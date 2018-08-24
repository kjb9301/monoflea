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
    ListActions.getMarketList(category);
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {loading,marketList,marketComingList} = this.props;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateInfo = {year:year,month:month,day:day};
    if(loading) return null;
    return (
      <div>
        <MarketList markets={marketComingList}/>
        <MarketList markets={marketList}>
          <Button onSelect={this.handleClick}>기간별</Button>
        </MarketList>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    marketList: state.marketList.get('marketList'),
    marketComingList: state.marketList.get('marketComingList'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions,dispatch)
  })
)(MarketListContainer);