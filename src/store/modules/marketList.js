import { createAction, handleActions} from 'redux-actions';
import { List,Map} from 'immutable';
import { pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_MARKET_LIST = 'markets/GET_MARKET_LIST';
const REMOVE_MARKET = 'markets/REMOVE_MARKET';

export const getMarketList = createAction(GET_MARKET_LIST,api.getMarketList);
export const removeMarket = createAction(REMOVE_MARKET,api.removeMarket);

const initialState = Map({
  marketList: List(),
  marketComingList: List(),
  message: ''
});

export default handleActions({
  ...pender({
    type: GET_MARKET_LIST,
    onSuccess: (state,action) => {
      const {marketList , marketComingList} = action.payload.data;
      return state.set('marketList', marketList)
                  .set('marketComingList', marketComingList)
    }
  }),
  ...pender({
    type: REMOVE_MARKET,
    onSuccess: (state,action) => {
      const {message} = action.payload.data;
      console.log(message);
      return state.set('message',message);
    }
  })
},initialState);