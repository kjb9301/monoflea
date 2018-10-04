import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import MarketRegButton from 'components/market/MarketRegButton/MarketRegButton';
import MarketRegList from 'components/market/MarketRegList/MarketRegList';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class MarketListRegContainer extends Component {
  getMarketList = () => {
    const {MarketActions,location} = this.props;
    const confirm = (location.pathname === '/markets'? 'Y' : 'N');
    MarketActions.getMarketList(confirm);
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
    const marketRegList = list.marketList;
    console.log(marketRegList)
    let len = parseInt(marketRegList.length/10, 10)*10;

    if(len > marketRegList.length-10) {
      setTimeout(async () => {
        await MarketActions.getMarketList('N','undefined',len+10);
        const { marketRegCount } = this.props;
        if(marketRegList.length >= marketRegCount) return MarketUIActions.toggleMoreState(false);
      }, 300);
    }
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {list,hasMore,userType,loading} = this.props;
    const {handleDetail,getMoreData} = this;
    const {marketList} = list;
    if(!marketList) return null;
    
    if(loading) return null;
    return (
      <div>
        {userType === 'H'?
          <Fragment>
            <MarketRegButton/>
            <MarketRegList markets={marketList} onDetail={handleDetail}/>
          </Fragment>
        :
          <Fragment>
            <MarketRegList markets={marketList} onDetail={handleDetail}/>
          </Fragment>
        } 
        <InfiniteScroll
          dataLength={marketList.length}
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
    userType: state.base.get('userType'),
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