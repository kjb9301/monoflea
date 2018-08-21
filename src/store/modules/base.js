import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

const LOGIN = 'base/LOGIN';
const INITIALIZE_LOGIN_MODAL = 'base/INITIALIZE_LOGIN_MODAL';
const CHANGE_PASSWORD_INPUT = 'base/CHANGE_PASSWORD_INPUT';
const CHANGE_EMAIL_INPUT = 'base/CHANGE_EMAIL_INPUT';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

// login
export const login = createAction(LOGIN, api.login);
export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const changeEmailInput = createAction(CHANGE_EMAIL_INPUT);

const initialState = Map({
  modal: Map({
    remove: false,
    login: false
  }),
  loginModal: Map({
    email: '',
    password: '',
    error: false
  }),
  logged: false,
  nickName: '',
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
      const { data: nickName } = action.payload;
      return state.set('logged', true)
                  .set('nickName', nickName)
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
}, initialState);