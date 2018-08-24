import { createAction, handleActions} from 'redux-actions';
import { List,Map} from 'immutable';
import { pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_MARKET_LIST = 'market/GET_MARKET_LIST';

export const getMarketList = createAction(GET_MARKET_LIST,api.getMarketList);

const initialState = Map({
  marketList: List(),
  marketComingList: List()
});

export default handleActions({
  ...pender({
    type: GET_MARKET_LIST,
    onSuccess: (state,action) => {
      const {marketList , marketComingList} = action.payload.data;
      return state.set('marketList', marketList)
                  .set('marketComingList', marketComingList)
    }
  })
},initialState);