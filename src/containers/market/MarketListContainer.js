import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import MarketList from 'components/market/MarketList';
import Button from 'components/common/Button/Button';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class MarketListContainer extends Component {
  getMarketList = () => {
    const {MarketActions} = this.props;
    MarketActions.getMarketList();
  }

  handleDetail = (id,listType) => {
    const {MarketUIActions,list} = this.props;
    let marketDetail = ''
    let idx = ''
    
    if(listType === 'B'){
      idx = list.marketList.findIndex(market => market.market_id == id);
      marketDetail = list.marketList[idx];
    }else{
      idx = list.marketComingList.findIndex(market => market.market_id == id);
      marketDetail = list.marketComingList[idx];
    }
    console.log(marketDetail);
    MarketUIActions.showModal('market');
    MarketUIActions.getValue({marketDetail});
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
        <MarketList listType='C' markets={marketComingList} onDetail={handleDetail} curGetTime={curGetTime}/>
        <hr/>
        <MarketList listType='B' markets={marketList} onDetail={handleDetail} curGetTime={curGetTime}>
          <Button toGetData={handleSelect} onHandleParams="2018-09-03">기간별</Button>
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