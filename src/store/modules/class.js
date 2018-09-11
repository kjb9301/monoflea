import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_CLASS_LIST = 'class/GET_CLASS_LIST';
const SET_DETAIL_CLASS = 'class/SET_DETAIL_CLASS';
const GET_CLASS_CATEGORY = 'class/GET_CLASS_CATEGORY';
const POST_NEW_CLASS = 'class/POST_NEW_CLASS';

export const getClassList = createAction(GET_CLASS_LIST, api.getClassList);
export const setDetailClass = createAction(SET_DETAIL_CLASS);
export const getClassCategory = createAction(GET_CLASS_CATEGORY, api.getClassCategory);
export const postNewClass = createAction(POST_NEW_CLASS, api.postNewClass);

const initialState = Map({
  classList : List(),
  categories : List(),
  // bestClassList : List(),
  classDetail: Map({})
})

export default handleActions({
  ...pender({
    type: GET_CLASS_LIST,
    onSuccess : (state,action) => {
      const { classList, categories } = action.payload.data;
      return state.set('classList', classList)
                  .set('categories', categories);
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
    // onSuccess: (state, action) => {
    //   console.log(action);
    //   return state;
    // },
    // onFailure: (state, action) => {
    //   console.log(action.payload.response)
    //   return state;
    // }
  }),
  [SET_DETAIL_CLASS]: (state, action) => {
    const detailInfo = action.payload;
    return state.set('classDetail', detailInfo);
  }
}, initialState)