import React, { Component } from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import HeaderContainer from 'containers/common/HeaderContainer';
import Footer from 'components/common/Footer';
import { withRouter } from 'react-router-dom';
import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const cx = classNames.bind(styles);

class PageTemplate extends Component {

  checkLoginUser = async () => {
    const { BaseActions } = this.props;
    await BaseActions.loginUserCheck();
    const { logged, nickName } = this.props;
    if(!logged) return delete localStorage.nickName;
    localStorage.nickName = nickName;
  }

  componentDidMount() {
    this.checkLoginUser();
  }

  render() {
    const { children, match, logged, nickName } = this.props;
    return (
      <div className={cx('page-template')}>
        <HeaderContainer isLogin={logged} userName={nickName} />
        <main>
          {children}
        </main>
        {
          match.path === '/' ?
          null :
          <Footer/>
        }
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    logged: state.base.get('logged'),
    nickName: state.base.get('nickName')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(PageTemplate));