import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MarketWrapper from 'components/market/MarketWrapper';

import * as baseActions from 'store/modules/base';

class MarketWrapperContainer extends Component {
  render() {
    const { userType } = this.props;
    return (
      <div>
        <MarketWrapper 
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
)(MarketWrapperContainer);