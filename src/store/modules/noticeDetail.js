import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_NOTICE_DETAIL = 'notices/GET_NOTICE_DETAIL';

export const getNoticeDetail = createAction(GET_NOTICE_DETAIL, api.getNoticeDetail);

const initialState = Map({
  noticeDetail: Map({})
});

export default handleActions({
  ...pender({
    type: GET_NOTICE_DETAIL,
    onSuccess: (state, action) => {
      const { data: noticeDetail } = action.payload;
      return state.set('noticeDetail', noticeDetail);
    }
  })
}, initialState);