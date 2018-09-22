import React, { Component } from 'react';
import Button from 'components/common/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
import * as sellerActions from 'store/modules/seller';
import * as sellerUIActions from 'store/modules/sellerUI';
import * as baseActions from 'store/modules/base';

class CategoryButton extends Component {

  handleClose = () =>{
    const { SellerUIActions } = this.props;
    SellerUIActions.hideModal('seller');
  }

  getSellersList = (category,like) => {
    const { SellerActions } = this.props;
    SellerActions.getSellersList(category,like);
  }
 
    componentDidMount(){
      this.getSellersList('All')
    }

  render() {
    const { loading, categories, nickName,userType} = this.props;
    const { getSellersList, handleModal, getSellerDetail} = this
    // console.log('CategoryButton');
    if(loading) return null;
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
    categoryList.unshift(<Button
                            key = {'Like'}
                            onHandleParams ='All'
                            anotherOnHandleParams = 'like'
                            toGetData = {getSellersList}> 좋아요</Button>)
    categoryList.unshift(<Button 
                            key = {'All'} 
                            onHandleParams = 'All'
                            toGetData = {getSellersList} >전체</Button>);
    if(loading) return null;
    return (
      <div>
        {categoryList}
      </div>
    );
  }
}

export default connect((state) => ({
  categories : state.seller.get('categories'),
  sellerList : state.seller.get('sellers'),
  loading : state.pender.pending['seller/GET_SELLERS_LIST'],
  nickName : state.base.get('nickName'),
  userType : state.base.get('userType')
}),
(dispatch) => ({
  SellerActions : bindActionCreators(sellerActions,dispatch),
  SellerUIActions : bindActionCreators(sellerUIActions,dispatch),
  BaseActions : bindActionCreators(baseActions,dispatch)
})
)(CategoryButton);