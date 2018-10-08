import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SellerDetailModal from 'components/modal/SellerDetailModal';

import * as sellerUIActions from 'store/modules/sellerUI'
import * as sellerActions from 'store/modules/seller';

class SellerDetailContainer extends Component {
  handleClose = () =>{
    const { SellerUIActions } = this.props;
    SellerUIActions.hideModal('seller');
  }

  handleLike = async (id) => {
    const { SellerActions, loggedUser } = this.props;
    if(!loggedUser) return alert('로그인이 필요합니다.')
    const increLike = await SellerActions.incrementLike(id)
    const { increLiked } = increLike.data
    console.log(increLiked)
  }

  handleDislike = async(id) => {
    const { SellerActions } = this.props;
    const decreLike = await SellerActions.decrementLike(id)
    const { decreLiked } = decreLike.data;
    console.log(decreLiked)
    // if(decreLiked){
    //   await SellerActions.getSellersList();
    // }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.visible !== this.props.visible;
  }

  render() {
    const { visible, sellerData, nickName, loggedUser } = this.props;
    const { handleClose, handleDislike , handleLike} = this;
    const detailInfo = sellerData.toJS();
    return (
      <div>
        <SellerDetailModal
          visible={visible}
          sellerDetailData ={detailInfo}
          onClose={handleClose}
          onLike={handleLike}
          offLike={handleDislike}
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
  loggedUser : state.base.get('logged'),
}),
  (dispatch) => ({
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch),
    SellerActions : bindActionCreators(sellerActions,dispatch),

  })

)(SellerDetailContainer);