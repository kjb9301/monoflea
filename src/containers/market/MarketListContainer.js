import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import MarketList from 'components/market/MarketList';
import Button from 'components/common/Button/Button';
import CalendarContainer from './CalendarContainer';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class MarketListContainer extends Component {
  getMarketList = () => {
    const {MarketActions,location} = this.props;
    const confirm = (location.pathname === '/markets'? 'Y' : 'N');
    MarketActions.getMarketList(confirm);
  }

  handleDetail = (id,listType) => {
    const {MarketActions,MarketUIActions,list} = this.props;
    let marketDetail = ''
    let idx = ''
    
    if(listType === 'L'){
      idx = list.marketList.findIndex(market => market.market_id == id);
      marketDetail = list.marketList[idx];
    }else{
      idx = list.marketComingList.findIndex(market => market.market_id == id);
      marketDetail = list.marketComingList[idx];
    }
    MarketUIActions.showModal('market');
    MarketUIActions.getValue({marketDetail});
    MarketActions.viewCount(id);
  }

  handleSelect = (category) => {
    const {MarketActions} = this.props;
    MarketActions.getMarketList(category);
  }

  getMoreData = () => {
    const { MarketActions, MarketUIActions, list } = this.props;
    const marketList = list.marketList;
    let len = parseInt(marketList.length/10)*10;

    if(len > marketList.length-10) {
      setTimeout(async () => {
        await MarketActions.getMarketList('Y','undefined',len+10);
        const { marketCount } = this.props;
        if(marketList.length >= marketCount) return MarketUIActions.toggleMoreState(false);
      }, 300);
    }
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {list,hasMore,loading} = this.props;
    const {marketList,marketComingList} = list;
    if(!marketList) return null;
    const {handleDetail,handleSelect,getMoreData} = this;
    const date = new Date();
    const curGetTime = date.getTime();

    //if(loading) return null;
    return (
      <div>
        <MarketList listType='CL' markets={marketComingList} onDetail={handleDetail} curGetTime={curGetTime}/>
        <MarketList listType='L' markets={marketList} onDetail={handleDetail} curGetTime={curGetTime}>
          <Button toGetData={handleSelect} onHandleParams="2018-09-03">기간별</Button>
          <CalendarContainer/>
        </MarketList>
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
    list: state.market.get('data'),
    hasMore: state.marketUI.get('hasMore'),
    marketCount: state.market.get('marketCount'),
    //loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketActions: bindActionCreators(marketActions,dispatch),
    MarketUIActions: bindActionCreators(marketUIActions,dispatch)
  })
)(withRouter(MarketListContainer));