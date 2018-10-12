import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Edit from 'components/seller/SellerOneData';
import axios from 'axios';
import LoginedSellerDetailContainer from 'containers/seller/LoginedSellerDetailContainer';

import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
import * as baseActions from 'store/modules/base';

class SellerOneData extends Component {
  handleModal = async () => {
    const { SellerActions, SellerUIActions, seller_id: id } = this.props;
    await SellerActions.getOneSeller(id);
    SellerUIActions.showModal('loggedSeller');
  }

  render() {
    const { userType } = this.props;
    const {  handleModal } = this

    return (
      <div>
        <Edit
          onModalLogged = {handleModal}
          userType = {userType}
          />
        <LoginedSellerDetailContainer/>
      </div>
    );
  }
}
export default connect((state) =>({
  oneSeller : state.seller.get('oneSeller'),
  userType : state.base.get('userType'),
  seller_id: state.base.get('seller_id')
}),
(dispatch) => ({
  SellerActions : bindActionCreators(sellerActions, dispatch),
  SellerUIActions : bindActionCreators(sellerUIActions, dispatch),
  BaseActions : bindActionCreators(baseActions,dispatch)
})
)(SellerOneData);