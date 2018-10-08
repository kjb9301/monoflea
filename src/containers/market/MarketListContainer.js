import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import MarketList from 'components/market/MarketList';
import CalendarContainer from 'containers/market/CalendarContainer';

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
      idx = list.marketList.findIndex(market => market.market_id === id);
      marketDetail = list.marketList[idx];
    }else{
      idx = list.marketComingList.findIndex(market => market.market_id === id);
      marketDetail = list.marketComingList[idx];
    }
    MarketUIActions.showModal('market');
    MarketUIActions.getValue({marketDetail});
    MarketActions.viewCount(id);
  }

  getMoreData = () => {
    const { MarketActions, MarketUIActions, list } = this.props;
    const marketList = list.marketList;
    let len = parseInt(marketList.length/10, 10)*10;

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

  shouldComponentUpdate(nextProps, nextState) {
    const {list,hasMore} = this.props;
    return (JSON.stringify(list.marketComingList) !== JSON.stringify(nextProps.list.marketComingList)) 
            || (JSON.stringify(list.marketList) !== JSON.stringify(nextProps.list.marketList)) 
            || (nextProps.hasMore !== hasMore)
  }

  render() {
    const {list,hasMore} = this.props;
    const {marketList,marketComingList} = list;
    if(!marketList) return null;
    const {handleDetail,getMoreData} = this;
    const date = new Date();
    const curGetTime = date.getTime();
    const loader = <div className="loader" key={0} style={{ 'width': '50%', 'textAlign': 'center', 'fontSize': '15px', 'margin': '15px auto' }}>Loading ...</div>;

    return (
      <div>
        <MarketList listType="CL" markets={marketComingList} onDetail={handleDetail} curGetTime={curGetTime}/>
        <MarketList listType="L" markets={marketList} onDetail={handleDetail} curGetTime={curGetTime}>
          <CalendarContainer/>
        </MarketList>
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
    marketCount: state.market.get('marketCount')
  }),
  (dispatch) => ({
    MarketActions: bindActionCreators(marketActions,dispatch),
    MarketUIActions: bindActionCreators(marketUIActions,dispatch)
  })
)(withRouter(MarketListContainer));