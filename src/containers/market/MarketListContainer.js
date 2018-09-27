import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import MarketList from 'components/market/MarketList';
import Button from 'components/common/Button/Button';
import CalendarContainer from './CalendarContainer';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class MarketListContainer extends Component {
  getMarketList = () => {
    const {MarketActions} = this.props;
    MarketActions.getMarketList();
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

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {list,loading} = this.props;
    const {marketList,marketComingList} = list;
    const {handleDetail,handleSelect} = this;
    const date = new Date();
    const curGetTime = date.getTime();

    if(loading) return null;
    return (
      <div>
        <MarketList listType='CL' markets={marketComingList} onDetail={handleDetail} curGetTime={curGetTime}/>
        <MarketList listType='L' markets={marketList} onDetail={handleDetail} curGetTime={curGetTime}>
          <Button toGetData={handleSelect} onHandleParams="2018-09-03">기간별</Button>
          <CalendarContainer/>
        </MarketList>
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
)(MarketListContainer);