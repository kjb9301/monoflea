import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
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
const CHANGE_SIGNUP_EMAIL = 'base/CHANGE_SIGNUP_EMAIL';
const CHANGE_SIGNUP_NICK = 'base/CHANGE_SIGNUP_NICK';
const CHANGE_SIGNUP_PASSWORD = 'base/CHANGE_SIGNUP_PASSWORD';
const CHANGE_SIGNUP_PASSWORD_CHECK = 'base/CHANGE_SIGNUP_PASSWORD_CHECK';
const INITIALIZE_SIGNUP_MODAL = 'base/INITIALIZE_SIGNUP_MODAL';
const COMPARE_PASSWORD = 'base/COMPARE_PASSWORD';

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
export const comparePassword = createAction(COMPARE_PASSWORD);

const initialState = Map({
  modal: Map({
    login: false,
    signup: false
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
    comparePwErr: false
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
      console.log(action)
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
    console.log(value);
    return state.setIn(['signupModal', 'passwordCheck'], value);
  },
  [COMPARE_PASSWORD]: (state, action) => {
    const { payload: value } = action;
    console.log(action);
    return state.setIn(['signupModal', 'comparePwErr'], value);
  }
}, initialState);