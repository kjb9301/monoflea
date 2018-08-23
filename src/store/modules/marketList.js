import { createAction, handleActions} from 'redux-actions';
import { List,Map} from 'immutable';
import { pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_MARKET_LIST = 'market/GET_MARKET_LIST';

export const getMarketList = createAction(GET_MARKET_LIST,api.getMarketList);

const initialState = Map({
  markets: List()
});

export default handleActions({
  ...pender({
    type: GET_MARKET_LIST,
    onSuccess: (state,action) => {
      const markets = action.payload.data;
      console.log(action.payload);
      return state.set('markets', markets)
    }
  })
},initialState);