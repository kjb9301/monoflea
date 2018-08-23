import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ClassList from 'components/class/ClassList';


// 수정 필요
import * as listActions from 'store/modules/marketList';


class ClassListContainer extends Component {
  getMarketList = () => {
    const {ListActions} = this.props;
    ListActions.getMarketList()
  }

  componentDidMount() {
    this.getMarketList();
  }

  render() {
    const {loading,markets} = this.props;
    if(loading) return null;
    return (
      <div>
        <ClassList markets={markets}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    markets: state.marketList.get('markets'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions,dispatch)
  })
)(ClassListContainer);