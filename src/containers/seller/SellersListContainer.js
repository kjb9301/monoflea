import React, { Component } from 'react';
import SellerList from '../../components/seller/SellerList'
import Button from '../../components/common/Button'
import SellerDetailModal from '../../components/modal/SellerDetailModal/SellerDetailModal'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerListActions from 'store/modules/sellerList';
import * as sellerDetailActions from 'store/modules/sellerDetail';
import * as modalActions from 'store/modules/modalVisible';

class SellersListContainer extends Component {
  
  getSellersList = (category) =>{
    const { SellerListActions } = this.props;
    SellerListActions.getSellersList(category);
  } 

  getSellerDetail  = (id) =>{
    const {SellerDetailActions, ModalActions} = this.props;
    ModalActions.showModal('seller')
    SellerDetailActions.getSellerDetail(id);
  }

  handleCancel = () =>{
    const { ModalActions } = this.props;
    ModalActions.hideModal('seller');
  }

  componentDidMount(){
    this.getSellersList()
  }
  
  render() {
    const { sellers, loading, categories, visible, sellerDetail } = this.props;
    const { getSellersList, getSellerDetail, handleCancel } = this
    const categoryList = categories.map(
      (categoryItem) => {
        const {category_id, category_ko, category} = categoryItem;
          return <Button
            key = {category_id}
            onHandlePrams = {category}
            onCategory = {getSellersList}
          > {category_ko} </Button>
      } 
    )
    if(loading) return null;
    return (  
      <div>
        <Button 
          key = {'All'}
          onCategory = {getSellersList}
        >전체</Button>
        {categoryList}
        <SellerList
          sellers = { sellers } 
          onModal = {getSellerDetail}
        />
        <SellerDetailModal
          visible = { visible }
          sellerDetail = { sellerDetail }
          onCancel = { handleCancel } 
         />
      </div>
    );
  }
}

export default connect((state) => ({
  sellers : state.sellerList.get('sellers'),
  categories : state.sellerList.get('categories'),
  sellerDetail : state.sellerDetail.get('sellerDetail'),
  visible : state.modalVisible.getIn(['modal','seller']),
  loading : state.pender.pending['seller/GET_SELLERS_LIST']
}),
(dispatch) => ({
  SellerListActions : bindActionCreators(sellerListActions,dispatch),
  SellerDetailActions : bindActionCreators(sellerDetailActions, dispatch),
  ModalActions : bindActionCreators(modalActions,dispatch)
})
)(SellersListContainer);