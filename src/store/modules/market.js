import { createAction, handleActions} from 'redux-actions';
import { List, Map } from 'immutable';
import { pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_MARKET_LIST = 'markets/GET_MARKET_LIST';
const CREATE_MARKET = 'markets/CREATE_MARKET';
const UPDATE_MARKET = 'markets/UPDATE_MARKET';
const DELETE_MARKET = 'markets/DELETE_MARKET';
const APPLY_MARKET = 'markets/APPLY_MARKET';
const GET_APPLY_LIST = 'markets/GET_APPLY_LIST';
const APPLY_CANCEL = 'markets/APPLY_CANCEL';
const APPLY_CLOSE = 'markets/APPLY_CLOSE';
const APPLY_DELETE = 'markets/APPLY_DELETE';
const VIEW_COUNT = 'markets/VIEW_COUNT';

export const getMarketList = createAction(GET_MARKET_LIST,api.getMarketList);
export const createMarket = createAction(CREATE_MARKET,api.createMarket);
export const updateMarket = createAction(UPDATE_MARKET,api.updateMarket);
export const deleteMarket = createAction(DELETE_MARKET,api.deleteMarket);
export const applyMarket = createAction(APPLY_MARKET,api.applyMarket);
export const getApplyList = createAction(GET_APPLY_LIST,api.getApplyList);
export const applyCancel = createAction(APPLY_CANCEL,api.applyCancel);
export const applyClose = createAction(APPLY_CLOSE,api.applyClose);
export const applyDelete = createAction(APPLY_DELETE,api.applyDelete);
export const viewCount = createAction(VIEW_COUNT,api.viewCount);

const initialState = Map({
  data: List(),
  applyList: List(),
  message: '',
  marketCount: 0
});

export default handleActions({
  ...pender({
    type: GET_MARKET_LIST,
    onSuccess: (state,action) => {
      const list = action.payload.data;
      const marketCount = list.marketCount;
      return state.set('data', list)
                  .set('marketCount', marketCount);
    }
  }),
  ...pender({
    type: CREATE_MARKET,
    onSuccess: (state,action) => {
      const {message} = action.payload.data;
      return state.set('message', message);
    }
  }),
  ...pender({
    type: UPDATE_MARKET,
    onSuccess: (state,action) => {
      const {message} = action.payload.data;
      return state.set('message',message);
    }
  }),
  ...pender({
    type: DELETE_MARKET,
    onSuccess: (state,action) => {
      const {message} = action.payload.data;
      return state.set('message',message);
    }
  }),
  ...pender({
    type: APPLY_MARKET,
    onSuccess: (state,action) => {
      const {message} = action.payload.data;
      return state.set('message',message);
    }
  }),
  ...pender({
    type: GET_APPLY_LIST,
    onSuccess: (state,action) => {
      const applyList = action.payload.data;
      return state.set('applyList',applyList);
    }
  }),
  ...pender({
    type: APPLY_CANCEL,
    onSuccess: (state,action) => {
      const {message} = action.payload.data;
      return state.set('message',message);
    }
  }),
  ...pender({
    type: APPLY_CLOSE,
    onSuccess: (state,action) => {
      const {message} = action.payload.data;
      return state.set('message', message);
    }
  }),
  ...pender({
    type: APPLY_DELETE,
    onSuccess: (state,action) => {
      const {message} = action.payload.data;
      return state.set('message', message);
    }
  }),
  ...pender({
    type: VIEW_COUNT
  }),
},initialState);