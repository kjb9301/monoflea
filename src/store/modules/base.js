import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

const LOGIN = 'base/LOGIN';
const LOGOUT = 'base/LOGOUT';
const LOGIN_USER_CHECK = 'base/LOGIN_USER_CHECK';
const INITIALIZE_LOGIN_MODAL = 'base/INITIALIZE_LOGIN_MODAL';
const CHANGE_LOGIN_INFO = 'base/CHANGE_LOGIN_INFO';

const SIGNUP = 'base/SIGNUP';
// const SOCIAL_ACCOUNT_SIGNUP ='base/SOCIAL_ACCOUNT_SIGNUP';
const CHANGE_SIGNUP_INFO = 'base/CHANGE_SIGNUP_INFO';
const INITIALIZE_SIGNUP_MODAL = 'base/INITIALIZE_SIGNUP_MODAL';
const CHECK_EMAIL = 'base/CHECK_EMAIL';
const CHECK_NICKNAME = 'base/CHECK_NICKNAME';

const CHANGE_USER_TYPE = 'base/CHAGE_USER_TYPE';

const CHANGE_MORE_AUTH = 'base/CHANGE_MORE_AUTH';
const CHANGE_MORE_INFO = 'base/CHANGE_MORE_INFO';

const GET_AUTH_NUMBER = 'base/GET_AUTH_NUMBER';

const CALL_SELLER_CATEGORY = 'base/CALL_SELLER_CATEGORY';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

// login
export const login = createAction(LOGIN, api.login);
export const logout = createAction(LOGOUT, api.logout);
export const loginUserCheck = createAction(LOGIN_USER_CHECK, api.loginUserCheck)
export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);
export const changeLoginInfo = createAction(CHANGE_LOGIN_INFO);

// signup
export const signup = createAction(SIGNUP, api.signup);
export const changeSignupInfo = createAction(CHANGE_SIGNUP_INFO);
export const initializeSignupModal = createAction(INITIALIZE_SIGNUP_MODAL);
export const checkEmail = createAction(CHECK_EMAIL, api.checkEmail);
export const checkNickname = createAction(CHECK_NICKNAME, api.checkNickname);
// export const signupSocialAccount = createAction(SOCIAL_ACCOUNT_SIGNUP, api.signupSocialAccount);

// signupType
export const changeUserType = createAction(CHANGE_USER_TYPE);

// signupMoreData
export const changeMoreAuth = createAction(CHANGE_MORE_AUTH);
export const changeMoreInfo = createAction(CHANGE_MORE_INFO);
export const getAuthNumber = createAction(GET_AUTH_NUMBER, api.getAuthNumber);

export const callSellerCategory = createAction(CALL_SELLER_CATEGORY, api.getSellerCategory);

const initialState = Map({
  modal: Map({
    login: false,
    signup: false,
    signupType: false,
    signupMore: false,
    class: false,
    enrolledClassList: false,
    enrolledUserInfo: false,
    myPageMap: false,
  }),
  loginModal: Map({
    email: '',
    password: '',
    error: false
  }),
  signupModal: Map({
    email: '',
    nickName: '',
    password: '',
    passwordCheck: '',
    checkedEmail: false,
    checkedEmailMessage: '',
    checkedNick: false,
    checkedNickMessage: ''
  }),
  signupTypeModal: Map({
    type: ''
  }),
  signupMoreModal: Map({
    name: '',
    tel: '',
    checkNum: '',
    isAuthenticated: false,
    authInfo: Map({
      isSent: false,
      authNum: '',
      message: ''
    }),
    category_id: '',
    career: '',
    sns: '',
    profileImg: '',
    sellerImg1: '',
    sellerImg2: '',
    sellerImg3: '',
    sellerImg4: '',
    biz_YN: '',
    seller_desc: '',
    class_TF: '',
    show_TF: '',
    sellerCategory: List([])
  }),
  logged: false,
  nickName: '',
  userType: '',
  name: '',
  tel: '',
  user_id: '',
  seller_id: '',
  host_id: '',
  loginMessage: ''
});

export default handleActions({
  [SHOW_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return state.setIn(['modal', modalName], true);
  },
  [HIDE_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return state.setIn(['modal', modalName], false);
  },
  ...pender({
    type: LOGIN,
    onSuccess: (state, action) => {
      const { isLogin, nickName, message, userType, name, tel, user_id, seller_id, host_id } = action.payload.data;
      return state.set('logged', isLogin)
                  .set('nickName', nickName)
                  .set('loginMessage', message)
                  .set('userType', userType)
                  .set('name', name)
                  .set('tel', tel)
                  .set('user_id', user_id)
                  .set('seller_id', seller_id)
                  .set('host_id', host_id);
    }
  }),
  ...pender({
    type: LOGIN_USER_CHECK,
    onSuccess: (state, action) => {
      const { data: userState } = action.payload;
      const { isLogin, nickName, userType, name, tel, user_id, seller_id, host_id } = userState;
      return state.set('logged', isLogin)
                  .set('nickName', nickName)
                  .set('userType', userType)
                  .set('name', name)
                  .set('tel', tel)
                  .set('user_id', user_id)
                  .set('seller_id', seller_id)
                  .set('host_id', host_id);
    }
  }),
  ...pender({
    type: SIGNUP,
    onSuccess: (state, action) => {
      const { isLogin, nickName } = action.payload.data;
      return state.set('logged', isLogin)
                  .set('nickName', nickName);
    }
  }),
  ...pender({
    type: LOGOUT,
    onSuccess: (state, action) => {
      return state.set('logged', false)
                  .set('nickName', '');
    }
  }),
  ...pender({
    type: CHECK_EMAIL,
    onSuccess: (state, action) => {
      const { checkedEmail, message } = action.payload.data;
      return state.setIn(['signupModal', 'checkedEmail'], checkedEmail)
                  .setIn(['signupModal', 'checkedEmailMessage'], message);
    }
  }),
  ...pender({
    type: CHECK_NICKNAME,
    onSuccess: (state, action) => {
      const { checkedNick, message } = action.payload.data;
      return state.setIn(['signupModal', 'checkedNick'], checkedNick)
                  .setIn(['signupModal', 'checkedNickMessage'], message);
    }
  }),
  ...pender({
    type: CALL_SELLER_CATEGORY,
    onSuccess: (state, action) => {
      const { data: sellerCategory } = action.payload;
      return state.setIn(['signupMoreModal', 'sellerCategory'], sellerCategory);
    }
  }),
  ...pender({
    type: GET_AUTH_NUMBER,
    onSuccess: (state, action) => {
      const { isSent, authNum, message } = action.payload.data;
      return state.setIn(['signupMoreModal', 'authInfo', 'isSent'], isSent)
                  .setIn(['signupMoreModal', 'authInfo', 'authNum'], authNum)
                  .setIn(['signupMoreModal', 'authInfo', 'message'], message);
    }
  }),
  [CHANGE_LOGIN_INFO]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['loginModal', name], value);
  },
  [INITIALIZE_LOGIN_MODAL]: (state, action) => {
    return state.set('loginModal', initialState.get('loginModal'));
  },
  [INITIALIZE_SIGNUP_MODAL]: (state, action) => {
    return state.set('signupModal', initialState.get('signupModal'));
  },
  [CHANGE_SIGNUP_INFO]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['signupModal', name], value);
  },
  [CHANGE_USER_TYPE]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['signupTypeModal', 'type'], value);
  },
  [CHANGE_MORE_INFO]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['signupMoreModal', name], value);
  },
  [CHANGE_MORE_AUTH]: (state, action) => {
    return state.setIn(['signupMoreModal', 'isAuthenticated'], action.payload);
  },
}, initialState);