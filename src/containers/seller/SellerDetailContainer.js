import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SellerDetailModal from 'components/modal/SellerDetailModal';

import * as sellerActions from 'store/module/seller';
import * as sellerUIActions from 'store/module/sellerUI'
class SellerDetailContainer extends Component {

  
  handleCancel = () =>{
    const { ModalActions } = this.props;
    ModalActions.hideModal('seller');
  }

  
  render() {
    const {visible, seller , loading} = this.props;
    const { handleCancel} = this
    if(loading) return null;
    const detailInfo = seller.toJS();
    return (
      <div>
          <SellerDetailModal
            seller = {seller}
            visible = { visible }
            sellerDetail = {detailInfo}
            onCancel = {handleCancel}
         />
      </div>
    );
  }
}

export default connect((state ) =>({
  seller : state.sellerUI.get('seller'),
  sellerList  : state.seller.get('seller'),
  visible : state.sellerUI.get(['modal','seller']),
  editTF : state.sellerUI.get('editTF'),
  loading :state.pender.pending['/seller/GET_SELLER_LIST']
}),
  (dispatch) =>({
    SellerActions : bindActionCreators(sellerActions, dispatch),
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch)
  })

)(SellerDetailContainer);