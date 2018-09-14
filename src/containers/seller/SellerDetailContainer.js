import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SellerDetailModal from 'components/modal/SellerDetailModal';
import { Map, List } from  'immutable';
import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI'
import * as baseActions from 'store/modules/base';
class SellerDetailContainer extends Component {

  //각각 데이터 바꾸는 방법 찾아보기
  handleCancel = (id) =>{
    const {SellerUIActions ,sellerList, editTF} = this.props;
    const idx  = sellerList.findIndex((seller => seller.seller_id === id))
    const sellerDetail = sellerList[idx];
    SellerUIActions.editTF(editTF);
    SellerUIActions.hideModal('seller');
    SellerUIActions.showModal('seller');
     SellerUIActions.detailData({sellerDetail})
  }

  handleClose = () =>{
    const { SellerUIActions } = this.props;
    SellerUIActions.hideModal('seller');
  }

  handleEdit = () =>{
    const { SellerUIActions ,editTF} = this.props;
    SellerUIActions.editTF(editTF);
  }
  
  handleUpdate = (id) => {
    const { SellerActions,SellerUIActions,sellerData,  editTF } = this.props;
    const sellerDetail = sellerData.toJS();
    SellerUIActions.editTF(editTF);
    SellerActions.updateSeller(id,sellerDetail);
    SellerActions.getSellersList('All');
  }

  handleChange = (e) => {
    const { SellerUIActions } = this.props;
    let { name, value } = e.target;
    name === 'show_TF' ? SellerUIActions.showTF({name,value}) 
                       : SellerUIActions.changedData({name,value});
  }

  render() {
    const {visible, editTF, sellerData , loading} = this.props;
    const { handleClose, handleEdit, handleChange, handleUpdate, handleShow, handleCancel} = this
    const detailInfo = sellerData.toJS();
    if(loading) return null;
    return (
      <div>
          <SellerDetailModal
            onOff =  { handleShow }
            onUpdate = {handleUpdate}
            onChange = {handleChange}
            onCancel = {handleCancel}
            onEdit = {handleEdit}
            visible = { visible }
            editTF = {editTF}
            sellerDetailData = {detailInfo}
            onClose = {handleClose}
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
  loading :state.pender.pending['/seller/GET_SELLER_LIST'],
  isLogin : state.base.get('logged')
}),
  (dispatch) =>({
    SellerActions : bindActionCreators(sellerActions, dispatch),
    SellerUIActions : bindActionCreators(sellerUIActions, dispatch),
    BaseActions : bindActionCreators(baseActions,dispatch)
  })

)(SellerDetailContainer);