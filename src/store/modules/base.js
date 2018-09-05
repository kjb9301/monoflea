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
const CHANGE_PASSWORD_INPUT = 'base/CHANGE_PASSWORD_INPUT';
const CHANGE_EMAIL_INPUT = 'base/CHANGE_EMAIL_INPUT';

const SIGNUP = 'base/SIGNUP';
// const SOCIAL_ACCOUNT_SIGNUP ='base/SOCIAL_ACCOUNT_SIGNUP';
const CHANGE_SIGNUP_EMAIL = 'base/CHANGE_SIGNUP_EMAIL';
const CHANGE_SIGNUP_NICK = 'base/CHANGE_SIGNUP_NICK';
const CHANGE_SIGNUP_PASSWORD = 'base/CHANGE_SIGNUP_PASSWORD';
const CHANGE_SIGNUP_PASSWORD_CHECK = 'base/CHANGE_SIGNUP_PASSWORD_CHECK';
const INITIALIZE_SIGNUP_MODAL = 'base/INITIALIZE_SIGNUP_MODAL';
const CHECK_EMAIL = 'base/CHECK_EMAIL';
const CHECK_NICKNAME = 'base/CHECK_NICKNAME';

const CHANGE_USER_TYPE = 'base/CHAGE_USER_TYPE';

// const CHANGE_MORE_NAME = 'base/CHANGE_MORE_NAME';
// const CHANGE_MORE_TEL = 'base/CHANGE_MORE_TEL';
// const CHANGE_MORE_CHKNUM = 'base/CHANGE_MORE_CHKNUM';
const CHANGE_MORE_AUTH = 'base/CHANGE_MORE_AUTH';
const CHANGE_MORE_INFO = 'base/CHANGE_MORE_INFO';
// const CHANGE_MORE_CATEGORY = 'base/CHANGE_MORE_CATEGORY';
// const CHANGE_MORE_CAREER = 'base/CHANGE_MORE_CAREER';
// const CHANGE_MORE_SNS = 'base/CHANGE_MORE_SNS';
// const CHANGE_MORE_PROFILEIMG = 'base/CHANGE_MORE_PROFILEIMG';
// const CHANGE_MORE_BIZ = 'base/CHANGE_MORE_BIZ';
// const CHANGE_MORE_DESC = 'base/CHANGE_MORE_DESC';
// const CHANGE_MORE_CLASS = 'base/CHANGE_MORE_CLASS';
// const CHANGE_MORE_SHOW = 'base/CHANGE_MORE_SHOW';

const GET_AUTH_NUMBER = 'base/GET_AUTH_NUMBER';

const CALL_SELLER_CATEGORY = 'base/CALL_SELLER_CATEGORY';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

// login
export const login = createAction(LOGIN, api.login);
export const logout = createAction(LOGOUT, api.logout);
export const loginUserCheck = createAction(LOGIN_USER_CHECK, api.loginUserCheck)
export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const changeEmailInput = createAction(CHANGE_EMAIL_INPUT);

// signup
export const signup = createAction(SIGNUP, api.signup);
export const changeSignupEmail = createAction(CHANGE_SIGNUP_EMAIL);
export const changeSignupNick = createAction(CHANGE_SIGNUP_NICK);
export const changeSignupPassword = createAction(CHANGE_SIGNUP_PASSWORD);
export const changeSignupPasswordCheck = createAction(CHANGE_SIGNUP_PASSWORD_CHECK);
export const initializeSignupModal = createAction(INITIALIZE_SIGNUP_MODAL);
export const checkEmail = createAction(CHECK_EMAIL, api.checkEmail);
export const checkNickname = createAction(CHECK_NICKNAME, api.checkNickname);
// export const signupSocialAccount = createAction(SOCIAL_ACCOUNT_SIGNUP, api.signupSocialAccount);

// signupType
export const changeUserType = createAction(CHANGE_USER_TYPE);

// signupMoreData
// export const changeMoreName = createAction(CHANGE_MORE_NAME);
// export const changeMoreTel = createAction(CHANGE_MORE_TEL);
// export const changeMoreChkNum = createAction(CHANGE_MORE_CHKNUM);
export const changeMoreAuth = createAction(CHANGE_MORE_AUTH);
export const changeMoreInfo = createAction(CHANGE_MORE_INFO);
// export const changeMoreCategory = createAction(CHANGE_MORE_CATEGORY);
// export const changeMoreCareer = createAction(CHANGE_MORE_CAREER);
// export const changeMoreSNS = createAction(CHANGE_MORE_SNS);
// export const changeMoreProfileImg = createAction(CHANGE_MORE_PROFILEIMG);
// export const changeMoreBiz = createAction(CHANGE_MORE_BIZ);
// export const changeMoreDesc = createAction(CHANGE_MORE_DESC);
// export const changeMoreClass = createAction(CHANGE_MORE_CLASS);
// export const changeMoreShow = createAction(CHANGE_MORE_SHOW);
export const getAuthNumber = createAction(GET_AUTH_NUMBER, api.getAuthNumber);

export const callSellerCategory = createAction(CALL_SELLER_CATEGORY, api.getSellerCategory);

const initialState = Map({
  modal: Map({
    login: false,
    signup: false,
    signupType: false,
    signupMore: false
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
    category: '',
    career: '',
    sns: '',
    profile_img: '',
    biz: '',
    desc: '',
    classTF: '',
    showTF: '',
    sellerCategory: List([])
  }),
  logged: false,
  nickName: '',
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
      const { isLogin, nickName, message } = action.payload.data;
      return state.set('logged', isLogin)
                  .set('nickName', nickName)
                  .set('loginMessage', message);
    }
  }),
  ...pender({
    type: LOGIN_USER_CHECK,
    onSuccess: (state, action) => {
      const { data: userState } = action.payload;
      const { isLogin, nickName } = userState;
      return state.set('logged', isLogin)
                  .set('nickName',nickName);
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
  [CHANGE_EMAIL_INPUT]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['loginModal', 'email'], value);
  },
  [CHANGE_PASSWORD_INPUT]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['loginModal', 'password'], value);
  },
  [INITIALIZE_LOGIN_MODAL]: (state, action) => {
    return state.set('loginModal', initialState.get('loginModal'));
  },
  [INITIALIZE_SIGNUP_MODAL]: (state, action) => {
    return state.set('signupModal', initialState.get('signupModal'));
  },
  [CHANGE_SIGNUP_EMAIL]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['signupModal', 'email'], value);
  },
  [CHANGE_SIGNUP_NICK]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['signupModal', 'nickName'], value);
  },
  [CHANGE_SIGNUP_PASSWORD]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['signupModal', 'password'], value);
  },
  [CHANGE_SIGNUP_PASSWORD_CHECK]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['signupModal', 'passwordCheck'], value);
  },
  [CHANGE_USER_TYPE]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['signupTypeModal', 'type'], value);
  },
  [CHANGE_MORE_INFO]: (state, action) => {
    const { name, value , files } = action.payload;
    // const bodyData = new FormData();
    // files ? bodyData.set(name, files[0]) : bodyData.set(name, value);
    return state.setIn(['signupMoreModal', name], value);
  },
  // [CHANGE_MORE_NAME]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'name'], value);
  // },
  // [CHANGE_MORE_TEL]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'tel'], value);
  // },
  // [CHANGE_MORE_CHKNUM]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'checkNum'], value);
  // },
  [CHANGE_MORE_AUTH]: (state, action) => {
    return state.setIn(['signupMoreModal', 'isAuthenticated'], action.payload);
  },
  // [CHANGE_MORE_CATEGORY]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'category'], value);
  // },
  // [CHANGE_MORE_CAREER]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'career'], value);
  // },
  // [CHANGE_MORE_SNS]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'sns'], value);
  // },
  // [CHANGE_MORE_PROFILEIMG]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'profile_img'], value);
  // },
  // [CHANGE_MORE_BIZ]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'biz'], value);
  // },
  // [CHANGE_MORE_DESC]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'desc'], value);
  // },
  // [CHANGE_MORE_CLASS]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'classTF'], value);
  // },
  // [CHANGE_MORE_SHOW]: (state, action) => {
  //   const { payload: value } = action;
  //   return state.setIn(['signupMoreModal', 'showTF'], value);
  // },
}, initialState);