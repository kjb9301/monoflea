import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import MarketList from 'components/market/MarketList';
import Button from 'components/common/Button/Button';
import MarketRegButton from 'components/market/MarketRegButton/MarketRegButton'; 
import MarketDetailModal from 'components/modal/MarketDetailModal';

import * as listActions from 'store/modules/marketList';
import * as detailActions from 'store/modules/marketDetail';
import * as modalActions from 'store/modules/modalVisible';

class MarketListContainer extends Component {
  getMarketList = () => {
    const {ListActions} = this.props;
    ListActions.getMarketList();
  }

  handleSelect = (category) => {
    const {ListActions} = this.props;
    ListActions.getMarketList(category);
  }

  handleDetail = (id) => {
    const {DetailActions,ModalActions} = this.props;
    ModalActions.showModal('market');
    DetailActions.getMarketDetail(id);
  }

  handleCancel = () => {
    const {ModalActions} = this.props;
    ModalActions.hideModal('market');
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {visible,loading,marketList,marketComingList,marketDetail} = this.props;
    const {handleDetail,handleSelect,handleCancel} = this;
    const date = new Date();
    const curGetTime = date.getTime();

    if(loading) return null;
    return (
      <div>
        <MarketList markets={marketComingList} curGetTime={curGetTime} onDetail={handleDetail}/>
        <MarketList markets={marketList} curGetTime={curGetTime} onDetail={handleDetail}>
          <Button onSelect={handleSelect}>기간별</Button>
          <MarketRegButton/>
        </MarketList>
        <MarketDetailModal visible={visible} marketDetail={marketDetail} onCancel={handleCancel}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.modalVisible.getIn(['modal','market']),
    marketList: state.marketList.get('marketList'),
    marketComingList: state.marketList.get('marketComingList'),
    marketDetail: state.marketDetail.get('marketDetail'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions,dispatch),
    DetailActions: bindActionCreators(detailActions,dispatch),
    ModalActions: bindActionCreators(modalActions,dispatch)
  })
)(withRouter(MarketListContainer));