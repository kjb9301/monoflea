import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Like from 'components/seller/Like';

import * as baseActions from 'store/modules/base';
import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
class LikeCotainer extends Component {
  
  handelLike = () => {
    const { sellerData } = this.props;
    console.log(21)
    console.log(sellerData);

  }
  render() {
    const { sellerData, loading } = this.props;
    const { handelLike} = this;
    console.log(sellerData);
    if(loading) return null;
    return (
      <div>
        <Like
          onLike = {handelLike}
        />
      </div>
    );
  }
}

export default connect((state) =>({
  sellerData : state.sellerUI.get('seller'),
  loading : state.pender.pending['/seller/GET_SELLER_LIST'],
}),
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions,dispatch),
    SellerActions : bindActionCreators(sellerActions, dispatch),
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch)
  })
)(LikeCotainer)