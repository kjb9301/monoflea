import React, { Component } from 'react';
import MyPageWrapper from 'components/mypage/MyPageWrapper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class MyPageWrapperContainer extends Component {
  render() {
    const { seller_id, nickName, user_id} = this.props;
    if(!user_id)  return null;
    return (
      <div>
        <MyPageWrapper
        seller_id = {seller_id}
        nickName = {nickName}
        user_id = {user_id}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    nickName : state.base.get('nickName'),
    host_id : state.base.get('host_id'),
    user_id : state.base.get('user_id')
  })
)(MyPageWrapperContainer);