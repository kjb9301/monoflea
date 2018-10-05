// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as mypageActions from 'store/modules/seller';


// export default function withMyPageHOC(url)(ComposedClass) {
//   class WithMyPageHOC extends Component{
//     render(){
//       const {sellerList} = this.props;
//       console.log(sellerList);
//       return(
//         <ComposedClass {...this.props}/>
//       );
//     }
//   }
//   const mapStateToProps = state => ({
//     sellerList : state.seller.get('sellers')
//   })
//   const mapDispatchToProps = dispatch => ({
//     MyPageActions : bindActionCreators(mypageActions,dispatch)
//   })
//   return connect(mapStateToProps, mapDispatchToProps)(WithMyPageHOC)
// }