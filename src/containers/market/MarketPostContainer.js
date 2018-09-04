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
    const {PostActions} = this.props;
    const {value,name} = e.target;
    
    
    if(name === 'poster'){
      
      bodyData.append('poster', e.target.files[0]);
      PostActions.changeMarketPoster(bodyData);
      // PostActions.changeMarketPoster(value);
    }else if(name === 'name'){
      bodyData.set('name', value);
      PostActions.changeMarketName(bodyData);
      // PostActions.changeMarketName(value);
    }else if(name === 'place'){
      bodyData.set('place', value);
      PostActions.changeMarketPlace(bodyData);
      // PostActions.changeMarketPlace(value);
    }else if(name === 'period'){
      bodyData.set('period', value);
      PostActions.changeMarketPeriod(bodyData);
      // PostActions.changeMarketPeriod(value);
    }else if(name === 'endDate'){
      bodyData.set('endDate', value);
      PostActions.changeEndDate(bodyData);
      // PostActions.changeEndDate(value);
    }else if(name === 'desc'){
      bodyData.set('desc', value);
      PostActions.changeMarketDesc(bodyData);
      // PostActions.changeMarketDesc(value);
    }
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