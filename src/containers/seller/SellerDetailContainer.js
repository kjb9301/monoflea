import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SellerDetailModal from 'components/modal/SellerDetailModal';

import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI'
import * as baseActions from 'store/modules/base';
class SellerDetailContainer extends Component {

  //각각 데이터 바꾸는 방법 찾아보기
  handleClose = () =>{
    const { SellerUIActions } = this.props;
    SellerUIActions.hideModal('seller');
  }


  render() {
    const {visible, sellerData, nickName} = this.props;
    const { handleClose} = this
    const detailInfo = sellerData.toJS()
    return (
      <div>
          <SellerDetailModal
            visible = { visible }
            sellerDetailData = {detailInfo}
            onClose = {handleClose}
            loggedNickName = {nickName}
         />
      </div>
    );
  }
}

export default connect((state ) =>({
  sellerList  : state.seller.get('sellers'),
  categories : state.seller.get('sellers'),
  sellerData : state.sellerUI.get('seller'),
  visible : state.sellerUI.getIn(['modal','seller']),
  editTF : state.sellerUI.get('editTF'),
  isLogin : state.base.get('logged'),
  nickName : state.base.get('nickName'),
  oneSeller : state.seller.get('oneSeller')
}),
  (dispatch) =>({
    SellerActions : bindActionCreators(sellerActions, dispatch),
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch),
    BaseActions : bindActionCreators(baseActions,dispatch)
  })

)(SellerDetailContainer);