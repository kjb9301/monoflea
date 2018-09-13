import React, { Component } from 'react';
import SellerList from '../../components/seller/SellerList'
import Button from '../../components/common/Button'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
import * as baseActions from 'store/modules/base';
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

  getLoginData = () =>{
    const { isLogin,nickName } = this.props;
    console.log(isLogin)
    console.log(nickName);
  }
  componentDidMount(){
    this.getSellersList('All')
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.sellerList == this.props.sellerList;
  // }

  // 최적화할때 해보기
  // static getDerivedStateFromProps(nextProps,prevState){
  //   if(nextProps !== prevState) {
  //     if(prevState){
  //       console.log(prevState.sellerList);
  //       return {sellerList :  nextProps.sellerList}
  //     }
  //   }
  // }
  
  render() {
    const { sellerList, loading ,categories } = this.props;
    const { getSellerDetail, handleModal , getSellersList, getLoginData} = this;
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
    categoryList.unshift(<Button key = {'All'} onHandleParams = 'All' toGetData = {getSellersList} >전체</Button>);
    if(loading) return null;
    return (  
      <div>
        {categoryList}
        <SellerList
          sellerList = { sellerList } 
          onModal = { handleModal }
          detailData = {getSellerDetail}
          getLoginData = {getLoginData}
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
  SellerUIActions : bindActionCreators(sellerUIActions,dispatch),
  BaseActions : bindActionCreators(baseActions,dispatch)
})
)(SellersListContainer);