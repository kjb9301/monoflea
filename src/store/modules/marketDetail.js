import {createAction,handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_MARKET_DETAIL = 'markets/GET_MARKET_DETAIL';

export const getMarketDetail = createAction(GET_MARKET_DETAIL,api.getMarketDetail);

const initialState = Map({
  marketDetail: Map({})
});

export default handleActions({
  ...pender({
    type: GET_MARKET_DETAIL,
    onSuccess: (state,action) => {
      const marketDetail = action.payload.data;
      return state.set('marketDetail',marketDetail);
    }
  })
},initialState);
