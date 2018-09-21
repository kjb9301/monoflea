import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MarketRegWrapper from 'components/market/MarketRegWrapper';

import * as baseActions from 'store/modules/base';

class MarketRegWrapperContainer extends Component {
  render() {
    const { userType } = this.props;
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