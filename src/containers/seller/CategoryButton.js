import React, { Component } from 'react';
import Button from 'components/common/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
import * as sellerActions from 'store/modules/seller';

class CategoryButton extends Component {

  getSellersList = (category) =>{
    const { SellerActions } = this.props;
    SellerActions.getSellersList(category);
  }

  render() {
    const { loading, categories} = this.props;
    const { getSellersList} = this
    console.log(1);
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
    
    if(loading) return null;
    return (
      <div>
        {categoryList}
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
})
)(CategoryButton);