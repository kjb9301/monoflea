import React, { Component } from 'react';
import SellerList from 'components/seller/SellerList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
import * as baseActions from 'store/modules/base';

class SellersListContainer extends Component {

  handleLike = async (id) => {
    const { SellerActions, loggedUser, category} = this.props;
    if(!loggedUser) return alert('로그인이 필요합니다.')
    const increLike = await SellerActions.incrementLike(id)
    const { increLiked } = increLike.data

    if(increLiked){
      console.log(category);
      await SellerActions.getSellersList(category)
    }
  }

  handleDislike = async(id) => {
    const { SellerActions, category } = this.props;
    const decreLike = await SellerActions.decrementLike(id)
    const { decreLiked } = decreLike.data;
    if(decreLiked){
      await SellerActions.getSellersList(category);
    }
  }

  getSellerDetail  = async (id) =>{
    const { SellerUIActions, SellerActions } = this.props;
    const sellerDetail = await axios.get(`/sellers/${id}`);
    const { data: detailInfo } = sellerDetail;
    const viewData = await SellerActions.incViewCnt(id);
    const { inc_view_cnt, view_cnt } = viewData.data;
    if(inc_view_cnt) detailInfo.view_cnt = view_cnt;
    SellerUIActions.detailData(detailInfo);
    return SellerUIActions.showModal('seller');
  }

  getSellersList = async (category) => {
    const { SellerActions } = this.props;
    await SellerActions.getSellersList(category);
  }

  getMoreData = () => {
    const { SellerActions, sellerList, category } = this.props;
    let len = parseInt(sellerList.length/8, 10)*8;
    if(len>sellerList.length-8) {
      setTimeout(async () => {
        await SellerActions.getSellersList(category,'undefined', len+8);
        const { totalCnt } = this.props;
        if(sellerList.length>=totalCnt) return SellerActions.toggleMoreState(false);
      }, 350);
    }
  }
  componentDidMount(){
    this.getSellersList();
  }
   
  render() {
    const { sellerList, hasMore} = this.props;
    const { getSellerDetail , handleDislike, handleLike } = this;
    const loader = <div className="loader" key={0} style={{ 'width': '50%', 'textAlign': 'center', 'fontSize': '15px', 'margin': '15px auto' }}>Loading ...</div>;
    return (  
      <div>
        <SellerList 
          onLike={handleLike}
          sellerList={sellerList} 
          detailData={getSellerDetail}
          offLike={handleDislike}
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
  loggedUser : state.base.get('logged'),
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