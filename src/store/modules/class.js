import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_CLASS_LIST = 'class/GET_CLASS_LIST';
// const GET_CLASS_DETAIL = 'class/GET_CLASS_DETAIL';
const SET_CATEGORY = 'class/SET_CATEGORY';
const SET_DETAIL_CLASS = 'class/SET_DETAIL_CLASS';
const GET_CLASS_CATEGORY = 'class/GET_CLASS_CATEGORY';
const POST_NEW_CLASS = 'class/POST_NEW_CLASS';
const GET_ENROLL_LIST = 'class/GET_ENROLL_LIST';
const SAVE_ENROLL_USER = 'class/SAVE_ENROLL_USER';
const TAKE_CLASS = 'class/TAKE_CLASS';
const CANCEL_CLASS = 'class/CANCEL_CLASS';
const TOGGLE_MORE_STATE = 'class/TOGGLE_MORE_STATE';

export const getClassList = createAction(GET_CLASS_LIST, api.getClassList);
// export const getClassDetail = createAction(GET_CLASS_DETAIL, api.getClassDetail);
export const setDetailClass = createAction(SET_DETAIL_CLASS);
export const setCategory = createAction(SET_CATEGORY);
export const toggleMoreState = createAction(TOGGLE_MORE_STATE);
export const getClassCategory = createAction(GET_CLASS_CATEGORY, api.getClassCategory);
export const postNewClass = createAction(POST_NEW_CLASS, api.postNewClass);
export const getEnrolledList = createAction(GET_ENROLL_LIST, api.getEnrolledList);
export const saveEnrollUser = createAction(SAVE_ENROLL_USER, api.saveEnrolledUser);
export const takeOnedayClass = createAction(TAKE_CLASS, api.takeOnedayClass);
export const cancelOnedayClass = createAction(CANCEL_CLASS, api.cancelOnedayClass);

const initialState = Map({
  classList : List(),
  categories : List(),
  enrolledList: List(),
  hasMore: true,
  totalCnt: 0,
  category: 'undefined',
  // bestClassList : List(),
});

export default handleActions({
  ...pender({
    type: GET_CLASS_LIST,
    onSuccess : (state, action) => {
      const { classList, categories, totalCnt } = action.payload.data;
      return state.set('classList', classList)
                  .set('categories', categories)
                  .set('totalCnt', totalCnt);
    }
  }),
  ...pender({
    type: GET_CLASS_CATEGORY,
    onSuccess: (state, action) => {
      const categories = action.payload.data;
      return state.set('categories', categories);
    }
  }),
  ...pender({
    type: POST_NEW_CLASS,
  }),
  ...pender({
    type: GET_ENROLL_LIST,
    onSuccess: (state, action) => {
      const { data: userList } = action.payload;
      return state.set('enrolledList', userList);
    }
  }),
  ...pender({
    type: SAVE_ENROLL_USER,
  }),
  ...pender({
    type: TAKE_CLASS,
  }),
  ...pender({
    type: CANCEL_CLASS,
  }),
  [TOGGLE_MORE_STATE]: (state, action) => {
    return state.set('hasMore', action.payload);
  },
  [SET_CATEGORY]: (state, action) => {
    return state.set('category', action.payload);
  }
}, initialState)