import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_CLASS_DETAIL = 'GET_CLASS_DETAIL';

export const getClassDetail = createAction(GET_CLASS_DETAIL, api.getClassDetail);

const initialState = Map({
  classDetail : List()
});

export default handleActions({
  ...pender({
    type : GET_CLASS_DETAIL,
    onSuccess : (state, action) => {
      const classDetail = action.payload.data;
      console.log('=========================== action.payload.data : classDetail =================');
      console.log(classDetail);
      return state.set('classDetail', classDetail)
    }
  })
}, initialState)