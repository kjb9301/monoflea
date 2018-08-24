import React, { Component } from 'react';
import SellerList from '../../components/seller/SellerList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sellerListActions from 'store/modules/sellerList';

class SellersListContainer extends Component {
  
  getSellersList = () =>{
    const { SellerListActions } = this.props;
    SellerListActions.getSellersList();
  } 

  componentDidMount(){
    this.getSellersList()
  }
  
  render() {
    console.log(this.props.sellers)
    const { sellers, loading } = this.props;
    if(loading) return null;
    return (  
      <div>
        <SellerList sellers = { sellers} />
      </div>
    );
  }
}

export default connect((state) => ({
  sellers : state.sellerList.get('sellers'),
  loading : state.pender.pending['seller/GET_SELLERS_LIST']
}),
(dispatch) => ({
  SellerListActions : bindActionCreators(sellerListActions,dispatch)
})
)(SellersListContainer);