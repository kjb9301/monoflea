import React, { Component } from 'react';
import MyPageWrapper from 'components/mypage/MyPageWrapper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class MyPageWrapperContainer extends Component {
  render() {
    const { seller_id, host_id, user_id} = this.props;
    if(!user_id)  return null;
    return (
      <div>
        <MyPageWrapper
        seller_id = {seller_id}
        host_id = {host_id}
        user_id = {user_id}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    seller_id : state.base.get('seller_id'),
    host_id : state.base.get('host_id'),
    user_id : state.base.get('user_id')
  })
)(MyPageWrapperContainer);