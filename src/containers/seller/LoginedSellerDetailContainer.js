import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import LoginedSellerDetailModal from 'components/modal/LoginedSellerDetailModal';
import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
import * as baseActions from 'store/modules/base';
class LoginedSellerDetailContainer extends Component {

  handleCancel = () =>{
    const {SellerUIActions ,SellerActions, editTF} = this.props;
    SellerUIActions.editTF(editTF);
    SellerUIActions.hideLoggedModal('loggedSeller')
    SellerActions.getOneSeller().then(result=>{
      const sellerDetail = result.data;
      SellerUIActions.detailData({sellerDetail})
      SellerUIActions.showLoggedModal('loggedSeller')
    }
  );
  }

  handleClose = () =>{
    const { SellerUIActions } = this.props;
    SellerUIActions.hideLoggedModal('loggedSeller');
  }
  handleChange = (e) => {
    const { SellerUIActions,loginedSeller } = this.props;
    let { name, value } = e.target;
    console.log(loginedSeller.toJS());
    console.log(name);
     name === 'show_TF' ? SellerUIActions.showTF({name,value}) 
                       : SellerUIActions.changedData({name,value})
    // SellerUIActions.changedData({name,value});
  }
  handleUpdate = (id) => {
    const { SellerActions,SellerUIActions,loginedSeller,  editTF } = this.props;
    const sellerDetail = loginedSeller.toJS();
    SellerUIActions.editTF(editTF);
    SellerActions.updateSeller(id,sellerDetail);
    SellerActions.getSellersList('All');
  }
  handleEdit = () =>{
    const { SellerUIActions ,editTF} = this.props;
    SellerUIActions.editTF(editTF);
  }
  render() {
    const { loginedSeller, loading,editTF,visible, loggedNickName} = this.props;
    const { handleEdit, handleUpdate, handleChange,handleCancel,handleClose} = this
    const loginedSellerData = loginedSeller.toJS();
    
    return (
      <div>
        <LoginedSellerDetailModal
          visible = {visible}
          onChange = {handleChange}
          onClose = {handleClose}
          onCancel = {handleCancel}
          onEdit = {handleEdit}
          editTF = {editTF}
          onUpdate = {handleUpdate}
          loginedSellerData = {loginedSellerData}
          loggedNickName = {loggedNickName}
        />
      </div>
    );
  }
}


export default connect((state ) =>({
  loginedSeller : state.seller.get('oneSeller'),
  visible : state.sellerUI.getIn(['modal','loggedSeller']),
  editTF : state.sellerUI.get('editTF'),
  loading :state.pender.pending['/seller/GET_SELLER_LIST'],
  loggedNickName : state.base.get('nickName')
}),
  (dispatch) =>({
    SellerActions : bindActionCreators(sellerActions, dispatch),
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch),
    BaseActions : bindActionCreators(baseActions,dispatch)
  })

)(LoginedSellerDetailContainer)