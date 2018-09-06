import React, { Component } from 'react';
import SellerList from '../../components/seller/SellerList'
import Button from '../../components/common/Button'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';

class SellersListContainer extends Component {
  
  getSellersList = (category) =>{
    const { SellerActions } = this.props;
    SellerActions.getSellersList(category);
  } 

  getSellerDetail  = (id) =>{
    const {SellerUIActions,sellers} = this.props;
    const idx = sellers.findIndex(seller => seller.seller_id ===id);
    const sellerDetail = sellers[idx];
    const modalName = 'seller';
    SellerUIActions.showModal({modalName, sellerDetail});
  }

  componentDidMount(){
    this.getSellersList()
  }
  
  render() {
    const { sellers, loading, categories} = this.props;
    const { getSellersList, getSellerDetail} = this
   
    
    
    if(loading) return null;
    return (  
      <div>
        <SellerList
          sellers = { sellers } 
          onModal = { getSellerDetail }
        />
      </div>
    );
  }
}

export default connect((state) => ({
  sellers : state.seller.get('sellers'),
  categories : state.seller.get('categories'),
  loading : state.pender.pending['seller/GET_SELLERS_LIST']
}),
(dispatch) => ({
  SellerActions : bindActionCreators(sellerActions,dispatch),
  SellerUIActions : bindActionCreators(sellerUIActions,dispatch)
})
)(SellersListContainer);