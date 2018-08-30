import {createAction,handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {pender} from 'redux-pender';

import * as api from 'lib/api';

const POST_MARKET = 'markets/POST_MARKET';
const CHANGE_MARKET_POSTER = 'markets/CHANGE_MARKET_POSTER';
const CHANGE_MARKET_NAME = 'markets/CHANGE_MARKET_NAME';
const CHANGE_MARKET_PLACE = 'markets/CHANGE_MARKET_PLACE';
const CHANGE_MARKET_DESC = 'markets/CHANGE_MARKET_DESC';
const CHANGE_MARKET_PERIOD = 'markets/CHANGE_MARKET_PERIOD';
const CHANGE_END_DATE = 'markets/CHANGE_END_DATE';

export const postMarket = createAction(POST_MARKET,api.postMarket);
export const changeMarketPoster = createAction(CHANGE_MARKET_POSTER);
export const changeMarketName = createAction(CHANGE_MARKET_NAME);
export const changeMarketPlace = createAction(CHANGE_MARKET_PLACE);
export const changeMarketDesc = createAction(CHANGE_MARKET_DESC);
export const changeMarketPeriod = createAction(CHANGE_MARKET_PERIOD);
export const changeEndDate = createAction(CHANGE_END_DATE);

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
  [CHANGE_MARKET_POSTER]: (state,action) => {
    const poster = action.payload;
    return state.set('poster',poster);
  },
  [CHANGE_MARKET_NAME]: (state,action) => {
    const name = action.payload;
    return state.set('name',name);
  },
  [CHANGE_MARKET_PLACE]: (state,action) => {
    const place = action.payload;
    return state.set('place',place);
  },
  [CHANGE_MARKET_DESC]: (state,action) => {
    const desc = action.payload;
    return state.set('desc',desc);
  },
  [CHANGE_MARKET_PERIOD]: (state,action) => {
    const period = action.payload;
    return state.set('period',period);
  },
  [CHANGE_END_DATE]: (state,action) => {
    const endDate = action.payload;
    return state.set('endDate',endDate);
  }
},initailState);