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
    const { SellerUIActions } = this.props;
    let { name, value } = e.target;
     name === 'show_TF' ? SellerUIActions.showTF({name,value}) 
                       : SellerUIActions.changedData({name,value})
  }
  handleUpdate = (id) => {
    const { SellerActions, SellerUIActions, oneSeller, editTF } = this.props;
    console.log(oneSeller.toJS());
    // const sellerDetail = loginedSeller.toJS();
    // SellerUIActions.editTF(editTF);
    // SellerActions.updateSeller(id,sellerDetail);
    // SellerActions.getSellersList();
  }
  
  render() {
    const { user_seller_id, oneSeller,editTF,visible, loggedNickName} = this.props;
    const { handleEdit, handleUpdate, handleChange,handleCancel,handleClose} = this
    const oneSellerData = oneSeller.toJS();
    return (
      <div>
        <LoginedSellerDetailModal
          visible = {visible}
          user_seller_id={user_seller_id}
          onChange = {handleChange}
          onClose = {handleClose}
          onCancel = {handleCancel}
          onEdit = {handleEdit}
          editTF = {editTF}
          onUpdate = {handleUpdate}
          oneSellerData = {oneSellerData}
          loggedNickName = {loggedNickName}
        />
      </div>
    );
  }
}


export default connect((state ) =>({
  oneSeller : state.seller.get('oneSeller'),
  visible : state.sellerUI.getIn(['modal','loggedSeller']),
  editTF : state.sellerUI.get('editTF'),
  loggedNickName : state.base.get('nickName'),
  user_seller_id : state.base.get('seller_id')
}),
  (dispatch) =>({
    SellerActions : bindActionCreators(sellerActions, dispatch),
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch),
    BaseActions : bindActionCreators(baseActions,dispatch)
  })

)(LoginedSellerDetailContainer)