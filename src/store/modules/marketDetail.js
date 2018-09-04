import {createAction,handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_MARKET_DETAIL = 'markets/GET_MARKET_DETAIL';
const UPDATE_TF = 'markets/UPDATE_TF';
const UPDATE_MARKET = 'markets/UPDATE_MARKET';
const UPDATE_NAME = 'markets/UPDATE_NAME';
const UPDATE_PLACE = 'markets/UPDATE_PLACE';
const UPDATE_POSTER = 'markets/UPDATE_POSTER';
const UPDATE_PERIOD = 'markets/UPDATE_PERIOD';
const UPDATE_ENDDATE = 'markets/UPDATE_ENDDATE';
const UPDATE_DESC = 'markets/UPDATE_DESC';
const UPDATE_INPUT = 'markets/UPDATE_INPUT';

export const getMarketDetail = createAction(GET_MARKET_DETAIL,api.getMarketDetail);
export const updateTF = createAction(UPDATE_TF);
export const updateMarket = createAction(UPDATE_MARKET,api.updateMarket);
export const updateName = createAction(UPDATE_NAME);
export const updatePlace = createAction(UPDATE_PLACE);
export const updatePoster = createAction(UPDATE_POSTER);
export const updatePeriod = createAction(UPDATE_PERIOD);
export const updateEndDate = createAction(UPDATE_ENDDATE);
export const updateDesc = createAction(UPDATE_DESC);
export const updateInput = createAction(UPDATE_INPUT);

const initialState = Map({
  marketDetail: Map({
    name: '',
    place: '',
    poster: '',
    period: '',
    endDate: '',
    desc: ''
  }),
  updateTF: false
});

export default handleActions({
  ...pender({
    type: GET_MARKET_DETAIL,
    onSuccess: (state,action) => {
      const marketDetail = action.payload.data;
      //const { market_id,market_name,market_place,market_poster,market_desc,market_period,end_date } = marketDetail;
      /* return state.setIn(['marketDetail', 'name'], market_name)
                  .setIn(['marketDetail','id'],market_id)
                  .setIn(['marketDetail','place'],market_place)
                  .setIn(['marketDetail','poster'],market_poster)
                  .setIn(['marketDetail','period'],market_period)
                  .setIn(['marketDetail','endDate'],end_date)
                  .setIn(['marketDetail','desc'],market_desc) */
      return state.set('marketDetail',marketDetail)
    }
  }),
  ...pender({
    type: UPDATE_MARKET,
    onSuccess: (state,action) => {}
  }),
  [UPDATE_INPUT]: (state,action) => {
    const {name,value} = action.payload;
    console.log(name)
    console.log(value)
    return state.set(['marketDetail',name],value)
  },
  [UPDATE_TF]: (state,action) => {
    return state.set('updateTF',true);
  },
  [UPDATE_NAME]: (state,action) => {
    const name = action.payload;
    return state.setIn(['marketUpdate','name'], name);
  },
  [UPDATE_PLACE]: (state,action) => {
    const place = action.payload;
    return state.setIn('place',place);
  },
  [UPDATE_POSTER]: (state,action) => {
    const poster = action.payload;
    return state.setIn('poster',poster);
  },
  [UPDATE_PERIOD]: (state,action) => {
    const period = action.payload;
    return state.setIn('period',period);
  },
  [UPDATE_ENDDATE]: (state,action) => {
    const endDate = action.payload;
    return state.setIn('endDate',endDate);
  },
  [UPDATE_DESC]: (state,action) => {
    const desc = action.payload;
    return state.setIn('desc',desc);
  }
},initialState);
