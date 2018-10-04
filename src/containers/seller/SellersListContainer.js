import React, { Component } from 'react';
import SellerList from '../../components/seller/SellerList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
import * as baseActions from 'store/modules/base';
class SellersListContainer extends Component {

  handleLike = async (id) =>{
    const { SellerActions,loggedUser} = this.props;
    if(!loggedUser) return alert('로그인이 필요합니다.')
    const increLike = await SellerActions.incrementLike(id)
    const {increLiked} = increLike.data
    if(increLiked){
      await SellerActions.getSellersList()
    }
  }

  handleDislike = async(id) => {
    const {SellerActions } = this.props;
    const decreLike = await SellerActions.decrementLike(id)
    const { decreLiked } = decreLike.data;
    if(decreLiked){
      await SellerActions.getSellersList();
    }
  }

  getSellerDetail  = async (id) =>{
    const {SellerUIActions,sellerList,SellerActions} = this.props;
    const idx = sellerList.findIndex(seller => seller.seller_id ===id);
    const viewData = await SellerActions.incViewCnt(id)
    const {inc_view_cnt, view_cnt} = viewData.data;
    if(inc_view_cnt) sellerList[idx].view_cnt = view_cnt;
    SellerUIActions.detailData(sellerList[idx]);
  }

  getSellersList = async (category) => {
    const { SellerActions } = this.props;
    await SellerActions.getSellersList(category);
  }

  handleModal =  ()=>  {
    const {SellerUIActions} = this.props;
    SellerUIActions.showModal('seller');
  }

  getMoreData = () => {
    const { SellerActions, sellerList, category } = this.props;
    let len = parseInt(sellerList.length/10, 10)*10;
    if(len>sellerList.length-10) {
      setTimeout(async () => {
        await SellerActions.getSellersList(category,'undefined', len+10);
        const { totalCnt } = this.props;
        if(sellerList.length>=totalCnt) return SellerActions.toggleMoreState(false);
      }, 350);
    }
  }
  componentDidMount(){
    this.getSellersList();
  }
   
  render() {
    const { sellerList,hasMore} = this.props;
    const { getSellerDetail, handleModal , handleDislike, handleLike} = this;
    const loader = <div className="loader" key={0}>Loading ...</div>;
    console.log(sellerList, 2);
    return (  
      <div>
        <SellerList 
          onLike = {handleLike}
          sellerList = { sellerList } 
          onModal = { handleModal }
          detailData = {getSellerDetail}
          offLike = {handleDislike}
        />
        <InfiniteScroll
          dataLength={sellerList.length}
          next={this.getMoreData}
          hasMore={hasMore}
          loader={loader}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  sellerList : state.seller.get('sellers'),
  category : state.seller.get('category'),
  hasMore : state.seller.get('hasMore'),
  totalCnt : state.seller.get('totalCnt')
}),
(dispatch) => ({
  SellerActions : bindActionCreators(sellerActions,dispatch),
  SellerUIActions : bindActionCreators(sellerUIActions,dispatch),
  BaseActions :  bindActionCreators(baseActions,dispatch)
})
)(SellersListContainer);