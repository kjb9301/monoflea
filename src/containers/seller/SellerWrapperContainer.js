import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SellerWrapper from 'components/seller/SellerWrapper';
class SellerWrapperContainer extends Component {
  render() {
    return (
      <div>
        <SellerWrapper/>
      </div>
    );
  }
}

export default SellerWrapperContainer;