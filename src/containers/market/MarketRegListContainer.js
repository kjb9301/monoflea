import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import MarketRegList from 'components/market/MarketRegList/MarketRegList';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class MarketListRegContainer extends Component {
  getMarketList = async () => {
    const { MarketActions, MarketUIActions, location } = this.props;
    const confirm = (location.pathname === '/markets'? 'Y' : 'N');
    await MarketActions.getMarketList(confirm);
    MarketUIActions.toggleMoreState(true);
  }

  handleDetail = (id) => {
    const {MarketUIActions,list} = this.props;
    const idx = list.marketList.findIndex(market => market.market_id === id);
    const marketDetail = list.marketList[idx];
    MarketUIActions.showModal('market');
    MarketUIActions.getValue({marketDetail});
  }

  getMoreData = () => {
    const { MarketActions, MarketUIActions, list } = this.props;
    const { marketCount } = this.props;
    const marketRegList = list.marketList;
    let len = parseInt(marketRegList.length, 10);
    if(len < marketCount){
      setTimeout(async() => {
        try {
          return await MarketActions.getMarketList('N','undefined',len+8);
        } catch(e) {
          const {message} = e.response.data;
          return alert(message);
        }
      },300);
    }
    if(len >= marketCount) return MarketUIActions.toggleMoreState(false);
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {list,hasMore,loading} = this.props;
    const {handleDetail,getMoreData} = this;
    const {marketList} = list;
    if(!marketList) return null;
    
    const loader = <div style={{ 'width': '10%', 'textAlign': 'center', 'fontSize': '15px', 'margin': '15px auto', 'padding': '10px', 'backgroundColor': 'green', 'color': 'white' }}>Loading ...</div>;
    return (
      <div>
        <MarketRegList markets={marketList} onDetail={handleDetail}/>
        <InfiniteScroll
          dataLength={marketList.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={loader}
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
    marketCount: state.market.get('marketCount'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketActions: bindActionCreators(marketActions,dispatch),
    MarketUIActions: bindActionCreators(marketUIActions,dispatch)
  })
)(withRouter(MarketListRegContainer));