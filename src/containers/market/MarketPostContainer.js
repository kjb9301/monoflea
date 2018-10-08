import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import MarketPost from 'components/market/MarketPost/MarketPost';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

const bodyData = new FormData();

class MarketPostContainer extends Component {
  getMarketList = () => {
    const {MarketActions} = this.props;
    MarketActions.getMarketList();
  }

  createMarket = async () => {
    const {MarketActions} = this.props;
    await MarketActions.createMarket(bodyData);
  }

  handleChange = (e) => {
    const {MarketUIActions} = this.props;
    const {name,value,files} = e.target;    
    files ? bodyData.append(name, files[0]) : bodyData.set(name, value);
    MarketUIActions.changeInput({ name, value });
  }

  handleCreate = () => {
    this.createMarket();
    const {history} = this.props;
    history.push('/markets/recruitment');
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const { handleChange, handleCreate, changeImage } = this;
    return (
      <div>
        <MarketPost onChange={handleChange} onCreate={handleCreate} changeImage={changeImage}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    poster: state.marketUI.getIn(['market','market_poster']),
    name: state.marketUI.getIn(['market','market_name']),
    place: state.marketUI.getIn(['market','market_place']),
    desc: state.marketUI.getIn(['market','market_desc']),
    startDate: state.marketUI.getIn(['market','start_date']),
    endDate: state.marketUI.getIn(['market','end_date'])
  }),
  (dispatch) => ({
    MarketActions: bindActionCreators(marketActions,dispatch),
    MarketUIActions: bindActionCreators(marketUIActions,dispatch)
  })
)(withRouter(MarketPostContainer));