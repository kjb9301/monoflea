import React, { Component } from 'react';
import MarketPost from 'components/market/MarketPost/MarketPost';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import * as postActions from 'store/modules/marketPost';

const bodyData = new FormData();

class MarketPostContainer extends Component {
  createMarket = async () => {
    const {PostActions,poster,name,place,period,endDate,desc} = this.props;
    await PostActions.postMarket(bodyData);
    // await PostActions.postMarket(poster, {name,place,period,endDate,desc});
  }

  handleChange = (e) => {
    const { PostActions } = this.props;
    const { value, name, files } = e.target;    
    files ? bodyData.append(name, files[0]) : bodyData.set(name, value);
    PostActions.changeMarketInfo({ name, value });
  }

  handleCreate = () => {
    this.createMarket();
    const {history} = this.props;
    history.push('/markets');
  }

  render() {
    const {handleChange,handleCreate} = this;
    return (
      <div>
        <MarketPost onChange={handleChange} onCreate={handleCreate}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    poster: state.marketPost.get('poster'),
    name: state.marketPost.get('name'),
    place: state.marketPost.get('place'),
    desc: state.marketPost.get('desc'),
    period: state.marketPost.get('period'),
    endDate: state.marketPost.get('endDate')
  }),
  (dispatch) => ({
    PostActions: bindActionCreators(postActions,dispatch)
  })
)(withRouter(MarketPostContainer));