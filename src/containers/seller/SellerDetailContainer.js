import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SellerDetailModal from 'components/modal/SellerDetailModal';

import * as sellerUIActions from 'store/modules/sellerUI'

class SellerDetailContainer extends Component {
  handleClose = () =>{
    const { SellerUIActions } = this.props;
    SellerUIActions.hideModal('seller');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.visible !== this.props.visible;
  }

  render() {
    const { visible, sellerData, nickName } = this.props;
    const { handleClose } = this;
    const detailInfo = sellerData.toJS();
    return (
      <div>
        <SellerDetailModal
          visible={visible}
          sellerDetailData ={detailInfo}
          onClose={handleClose}
          loggedNickName={nickName}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  sellerData : state.sellerUI.get('seller'),
  visible : state.sellerUI.getIn(['modal','seller']),
  nickName : state.base.get('nickName'),
}),
  (dispatch) => ({
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch),
  })

)(SellerDetailContainer);