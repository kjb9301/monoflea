import React, { Component } from 'react';
import SellerList from '../../components/seller/SellerList'
import Button from '../../components/common/Button'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerListActions from 'store/modules/sellerList';

class SellersListContainer extends Component {
  
  getSellersList = (category) =>{
    const { SellerListActions } = this.props;
    SellerListActions.getSellersList(category);
  } 

  getSellerId  = (id) =>{
    const {SellerListActions} = this.props;
      
  }
  componentDidMount(){
    this.getSellersList()
  }
  
  render() {
    const { sellers, loading, categories } = this.props;
    const { getSellersList } = this
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
        <SellerList sellers = { sellers } />
      </div>
    );
  }
}

export default connect((state) => ({
  sellers : state.sellerList.get('sellers'),
  categories : state.sellerList.get('categories'),
  loading : state.pender.pending['seller/GET_SELLERS_LIST']
}),
(dispatch) => ({
  SellerListActions : bindActionCreators(sellerListActions,dispatch)
})
)(SellersListContainer);