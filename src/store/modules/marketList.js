import { createAction, handleActions} from 'redux-actions';
import { List,Map,fromJS} from 'immutable';
import { pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_MARKET_LIST = 'markets/GET_MARKET_LIST';
//const GET_MARKET_DETAIL = 'markets/GET_MARKET_DETAIL';
const UPDATE_MARKET = 'markets/UPDATE_MARKET';
//const REMOVE_MARKET = 'markets/REMOVE_MARKET';

export const getMarketList = createAction(GET_MARKET_LIST,api.getMarketList);
//export const getMarketDetail = createAction(GET_MARKET_DETAIL,api.getMarketDetail);
export const updateMarket = createAction(UPDATE_MARKET,api.updateMarket);
//export const removeMarket = createAction(REMOVE_MARKET,api.removeMarket);

const initialState = Map({
  data: List()
  /* marketComingList: List(),
  message: '' */
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
    type: UPDATE_MARKET,
    onSuccess: (state,action) => {
      //const index = state.get('data').findIndex(memo => memo.get('id') === id);
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
  /* ...pender({
    type: REMOVE_MARKET,
    onSuccess: (state,action) => {
      const {message} = action.payload.data;
      console.log(message);
      return state.set('message',message);
    }
  }) */
},initialState);