/* import {createAction,handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {pender} from 'redux-pender';

import * as api from 'lib/api';

const POST_MARKET = 'markets/POST_MARKET';
const CHANGE_MARKET_INFO = 'markets/CHANGE_MARKET_INFO';

export const postMarket = createAction(POST_MARKET,api.postMarket);
export const changeMarketInfo = createAction(CHANGE_MARKET_INFO);

const initailState = Map({
  poster: '',
  name: '',
  place: '',
  desc: '',
  period: '',
  endDate: ''
});

export default handleActions({
  ...pender({
    type: POST_MARKET,
    onSuccess: (state,action) => {

    }
  }),
  [CHANGE_MARKET_INFO]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  }
},initailState); */