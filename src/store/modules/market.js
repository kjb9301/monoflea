import { createAction, handleActions} from 'redux-actions';
import { List,Map,fromJS} from 'immutable';
import { pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_MARKET_LIST = 'markets/GET_MARKET_LIST';
//const GET_MARKET_DETAIL = 'markets/GET_MARKET_DETAIL';
const CREATE_MARKET = 'markets/CREATE_MARKET';
const UPDATE_MARKET = 'markets/UPDATE_MARKET';
const DELETE_MARKET = 'markets/DELETE_MARKET';

export const getMarketList = createAction(GET_MARKET_LIST,api.getMarketList);
//export const getMarketDetail = createAction(GET_MARKET_DETAIL,api.getMarketDetail);
export const createMarket = createAction(CREATE_MARKET,api.createMarket);
export const updateMarket = createAction(UPDATE_MARKET,api.updateMarket);
export const deleteMarket = createAction(DELETE_MARKET,api.deleteMarket);

const initialState = Map({
  data: List(),
  message: '' 
});

export default handleActions({
  ...pender({
    type: GET_MARKET_LIST,
    onSuccess: (state,action) => {
      const list = action.payload.data;
      return state.set('data', list)
    }
  }),
  ...pender({
    type: CREATE_MARKET,
    onSuccess: (state,action) => {

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
  })
  /*,
  ...pender({
    type: GET_DETAIL_MARKET,
    onSuccess: (state,action) => {
      const detail = action.payload.data;
      return state.set('data',detail)
    }
  }) */
},initialState);