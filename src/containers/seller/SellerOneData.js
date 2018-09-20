import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Edit from 'components/seller/SellerOneData';
import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
import * as baseActions from 'store/modules/base';
class SellerOneData extends Component {
  // handleModal = ()=>{
  //   const {SellerUIActions} = this.props;
  //   SellerUIActions.showLoggedModal('loggedSeller');
  // }

  // getSellerDetail  = () =>{
  //   const {SellerActions, SellerUIActions} = this.props;
  //   SellerActions.getOneSeller()
  //     .then(result => {
  //       const  sellerDetail = result.data;
  //       SellerUIActions.detailData({sellerDetail})
  //     })
  // }
  handleModal = () =>{
    const {SellerActions, SellerUIActions} = this.props;
      SellerActions.getOneSeller()
        .then(result => {
          const  sellerDetail = result.data;
          SellerUIActions.detailData({sellerDetail})
          SellerUIActions.showLoggedModal('loggedSeller');
        })
  }

  render() {
    const { userType} = this.props;
    const {  handleModal, getSellerDetail} = this
    return (
      <div>
        <Edit
          onModalLogged = {handleModal}
          // detailData = {getSellerDetail}
          userType = {userType}
          />
      </div>
    );
  }
}
export default connect((state ) =>({
  sellerList  : state.seller.get('sellers'),
  visible : state.sellerUI.getIn(['modal','loggedSeller']),
  loading :state.pender.pending['/seller/GET_SELLER_LIST'],
  nickName : state.base.get('nickName'),
  userType : state.base.get('userType')
}),
  (dispatch) =>({
    SellerActions : bindActionCreators(sellerActions, dispatch),
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch),
    BaseActions : bindActionCreators(baseActions,dispatch)
  })

)(SellerOneData)