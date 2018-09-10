import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SellerDetailModal from 'components/modal/SellerDetailModal';

import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI'
class SellerDetailContainer extends Component {

  
  handleCancel = () =>{
    const { SellerUIActions } = this.props;
    SellerUIActions.hideModal('seller');
  }

  handleChange = (e) => {

  }
  
  render() {
    const {visible, sellerDetail , loading} = this.props;
    const { handleCancel} = this
    const detailInfo = sellerDetail.toJS();
    if(loading) return null;
    return (
      <div>
          <SellerDetailModal
            visible = { visible }
            sellerDetailData = {detailInfo}
            onCancel = {handleCancel}
         />
      </div>
    );
  }
}

export default connect((state ) =>({
  sellerDetail : state.sellerUI.get('seller'),
  sellerList  : state.seller.get('seller'),
  visible : state.sellerUI.getIn(['modal','seller']),
  editTF : state.sellerUI.get('editTF'),
  loading :state.pender.pending['/seller/GET_SELLER_LIST']
}),
  (dispatch) =>({
    SellerActions : bindActionCreators(sellerActions, dispatch),
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch)
  })

)(SellerDetailContainer);