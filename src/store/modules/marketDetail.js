// import {createAction,handleActions} from 'redux-actions';
// import {Map} from 'immutable';
// import {pender} from 'redux-pender';

// import * as api from 'lib/api';

// //const GET_MARKET_DETAIL = 'markets/GET_MARKET_DETAIL';

// //export const getMarketDetail = createAction(GET_MARKET_DETAIL,api.getMarketDetail);

// const initialState = Map({
//   marketDetail: Map({
//     name: '',
//     place: '',
//     poster: '',
//     period: '',
//     endDate: '',
//     desc: ''
//   }),
//   updateTF: false
// });

// export default handleActions({
//   /* ...pender({
//     type: GET_MARKET_DETAIL,
//     onSuccess: (state,action) => {
//       const marketDetail = action.payload.data;
//       //const { market_id,market_name,market_place,market_poster,market_desc,market_period,end_date } = marketDetail;
//       /* return state.setIn(['marketDetail', 'name'], market_name)
//                   .setIn(['marketDetail','id'],market_id)
//                   .setIn(['marketDetail','place'],market_place)
//                   .setIn(['marketDetail','poster'],market_poster)
//                   .setIn(['marketDetail','period'],market_period)
//                   .setIn(['marketDetail','endDate'],end_date)
//                   .setIn(['marketDetail','desc'],market_desc) */
//     //   return state.set('marketDetail',marketDetail)
//     // }
//   })
// },initialState);
