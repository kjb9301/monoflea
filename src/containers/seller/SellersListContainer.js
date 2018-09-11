import React, { Component } from 'react';
import SellerList from '../../components/seller/SellerList'
import Button from '../../components/common/Button'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';

class SellersListContainer extends Component {
  
  getSellerDetail  = (id) =>{
    const {SellerUIActions,sellerList} = this.props;
    const idx = sellerList.findIndex(seller => seller.seller_id ===id);
    const sellerDetail = sellerList[idx];
    SellerUIActions.detailData({sellerDetail});
  }

  getSellersList = (category) => {
    const { SellerActions } = this.props;
    SellerActions.getSellersList(category);
  }

  handleModal = ()=>{
    const {SellerUIActions} = this.props;
    SellerUIActions.showModal('seller');
  }
  componentDidMount(){
    this.getSellersList()
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.categories !== this.props.categories;
  // }
  render() {
    const { sellerList, loading ,categories} = this.props;
    const { getSellerDetail, handleModal , getSellersList} = this;
    const categoryList = categories.map(
      (categoryItem) => {
        const {category_id, category_ko, category} = categoryItem;
          return <Button
            key = {category_id}
            onHandleParams = {category}
            toGetData = {getSellersList}
          > {category_ko} </Button>
      } 
    )
    categoryList.unshift(<Button key = {'All'} toGetData = {getSellersList} >전체</Button>);
    if(loading) return null;
    return (  
      <div>
        {categoryList}
        <SellerList
          sellerList = { sellerList } 
          onModal = { handleModal }
          detailData = {getSellerDetail}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  sellerList : state.seller.get('sellers'),
  categories : state.seller.get('categories'),
  loading : state.pender.pending['seller/GET_SELLERS_LIST'],
}),
(dispatch) => ({
  SellerActions : bindActionCreators(sellerActions,dispatch),
  SellerUIActions : bindActionCreators(sellerUIActions,dispatch)
})
)(SellersListContainer);