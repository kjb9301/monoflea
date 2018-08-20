import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_NOTICE_LIST = 'notices/GET_NOTICE_LIST';

export const getNoticeList = createAction(GET_NOTICE_LIST, api.getNoticeList);

const initialState = Map({
  notices: List()
});

export default handleActions({
  ...pender({
    type: GET_NOTICE_LIST,
    onSuccess: (state, action) => {
      const { data: notices } = action.payload;
      console.log(notices);
      return state.set('notices', notices);
    }
  })
}, initialState);