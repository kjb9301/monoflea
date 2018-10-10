import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MarketRegWrapper from 'components/market/MarketRegWrapper';
import { Redirect } from 'react-router-dom'

import * as baseActions from 'store/modules/base';

class MarketRegWrapperContainer extends Component {
  render() {
    const { userType } = this.props;
    if(!userType || userType === 'U') {
      alert('셀러 및 주최자로 로그인 해주세요!');
      return <Redirect to='/' />
    } 
    return (
      <div>
        <MarketRegWrapper 
          userType={userType}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userType: state.base.get('userType'),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(MarketRegWrapperContainer);