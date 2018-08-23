import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerListActions from 'store/modules/sellerList';

class SellersListContainer extends Component {

  render() {
    console.log(this.props.sellers);
    console.log(this.props.sellers)
    return (
      <div>
        
      </div>
    );
  }
}

export default connect((state) => ({
  sellers : state.sellerList.get('sellers')
}),
(dispatch) => ({
  SellerListActions : bindActionCreators(sellerListActions,dispatch)
})
)(SellersListContainer);