import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import MarketRegButton from 'components/market/MarketRegButton/MarketRegButton';
import MarketRegList from 'components/market/MarketRegList/MarketRegList';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class MarketListRegContainer extends Component {
  getMarketList = () => {
    const {MarketActions} = this.props;
    MarketActions.getMarketList();
  }

  handleDetail = (id) => {
    const {MarketUIActions,list} = this.props;
    console.log(list.marketRegList)
    const idx = list.marketRegList.findIndex(market => market.market_id === id);
    const marketDetail = list.marketRegList[idx];
    console.log(marketDetail.market_id)
    MarketUIActions.showModal('market');
    MarketUIActions.getValue({marketDetail});
  }

  getMoreData = () => {
    const { MarketActions, MarketUIActions, list } = this.props;
    const marketRegList = list.marketRegList;
    let len = parseInt(marketRegList.length/10)*10;

    if(len > marketRegList.length-10) {
      setTimeout(async () => {
        await MarketActions.getMarketList('undefined',len+10);
        const { marketRegCount } = this.props;
        if(marketRegList.length >= marketRegCount) return MarketUIActions.toggleMoreState(false);
      }, 300);
    }
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {list,hasMore,loading} = this.props;
    const {handleDetail,getMoreData} = this;
    const {marketRegList} = list;
    if(!marketRegList) return null;
    
    if(loading) return null;
    return (
      <div>
        <MarketRegButton/>
        <MarketRegList markets={marketRegList} onDetail={handleDetail}/>
        <InfiniteScroll
          dataLength={marketRegList.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
        </InfiniteScroll>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    list: state.market.get('data'),
    hasMore: state.marketUI.get('hasMore'),
    marketRegCount: state.market.get('marketRegCount'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketActions: bindActionCreators(marketActions,dispatch),
    MarketUIActions: bindActionCreators(marketUIActions,dispatch)
  })
)(MarketListRegContainer);