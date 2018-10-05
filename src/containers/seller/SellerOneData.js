import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Edit from 'components/seller/SellerOneData';
import axios from 'axios';

import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
import * as baseActions from 'store/modules/base';

class SellerOneData extends Component {
  handleModal = async () => {
    const { SellerUIActions, seller_id: id } = this.props;
    try {
      const sellerDetail = await axios.get(`/sellers/${id}`);
      const { data: detailInfo } = sellerDetail;
      SellerUIActions.detailData(detailInfo);
      SellerUIActions.showModal('seller');
    } catch(e) {
      const { message } = e.response.data;
      return alert(message);
    }
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
      </div>
    );
  }
}
export default connect((state) =>({
    userType : state.base.get('userType'),
    seller_id: state.base.get('seller_id')
  }),
  (dispatch) =>({
    SellerActions : bindActionCreators(sellerActions, dispatch),
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch),
    BaseActions : bindActionCreators(baseActions,dispatch)
  })
)(SellerOneData)