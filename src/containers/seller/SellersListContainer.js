import React, { Component } from 'react';
import SellerList from '../../components/seller/SellerList'
import Button from '../../components/common/Button'
import Like from 'components/common/Like';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
import * as baseActions from 'store/modules/base';
class SellersListContainer extends Component {
  // handelLike = (UILikeCnt,sellerLikeCnt,seller) => {
  handelLike = (id,seller, likeOn) => {
    const { SellerActions,nickName} = this.props;
    console.log(seller.seller_likes)
    console.log(likeOn);
    if(nickName){
      if(!likeOn){
        seller.like_cnt = (seller.like_cnt+1);
        SellerActions.incrementLike(id,seller).then(()=>{
          this.getSellersList('All')  
        })
      } return false;
    }else {
      alert("로그인 이후 사용 가능합니다.")
      return false;
    }
  }

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
    const { nickName, isLogined } = this.props;
    console.log(nickName);
    console.log(isLogined)
  }
  componentDidMount(){
    this.getSellersList('All');
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
    const { sellerList, loading ,categories ,UILikeCnt, nickName} = this.props;
    const { getSellerDetail, handleModal , getSellersList, getLoginData,handelLike} = this;
    console.log(nickName);
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
          UILikeCnt = {UILikeCnt}
          onLike = {handelLike}
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
  nickName : state.base.get('nickName'),
  isLogined : state.base.get('logged')
  // UILikeCnt : state.sellerUI.getIn(['seller', 'like_cnt'])
}),
(dispatch) => ({
  SellerActions : bindActionCreators(sellerActions,dispatch),
  SellerUIActions : bindActionCreators(sellerUIActions,dispatch),
  BaseActions : bindActionCreators(baseActions,dispatch)
})
)(SellersListContainer);