import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_NOTICE_LIST = 'notices/GET_NOTICE_LIST';
const SET_TOTAL_CNT = 'notices/SET_TOTAL_CNT';
const TOGGLE_MORE_STATE = 'notices/TOGGLE_MORE_STATE';

export const getNoticeList = createAction(GET_NOTICE_LIST, api.getNoticeList);
export const setTotalCnt = createAction(SET_TOTAL_CNT);
export const toggleMoreState = createAction(TOGGLE_MORE_STATE);

const initialState = Map({
  notices: List(),
  hasMore: true,
  totalCnt: 0,
});

export default handleActions({
  ...pender({
    type: GET_NOTICE_LIST,
    onSuccess: (state, action) => {
      const { noticeList, noticeCnt } = action.payload.data;
      return state.set('notices', noticeList)
                  .set('totalCnt', noticeCnt);
    }
  }),
  [TOGGLE_MORE_STATE]: (state, action) => {
    return state.set('hasMore', action.payload);
  },
}, initialState);