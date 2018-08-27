import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import MarketList from 'components/market/MarketList';
import Button from '../../components/common/Button/Button';

import * as listActions from 'store/modules/marketList';
import * as detailActions from 'store/modules/marketDetail';

class MarketListContainer extends Component {
  getMarketList = () => {
    const {ListActions} = this.props;
    ListActions.getMarketList();
  }

  handleClick = (category) => {
    const {ListActions} = this.props;
    ListActions.getMarketList(category);
  }

  handleDetail = (id) => {
    const {history} = this.props;
    history.push(`/markets/${id}`);
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {loading,marketList,marketComingList} = this.props;
    const date = new Date();
    const curGetTime = date.getTime();

    if(loading) return null;
    return (
      <div>
        <MarketList markets={marketComingList} curGetTime={curGetTime} onDetail={this.handleDetail}/>
        <MarketList markets={marketList} curGetTime={curGetTime} onDetail={this.handleDetail}>
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
    ListActions: bindActionCreators(listActions,dispatch),
    DetailActions: bindActionCreators(detailActions,dispatch)
  })
)(withRouter(MarketListContainer));