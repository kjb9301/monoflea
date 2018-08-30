import { createAction, handleActions } from 'redux-actions'
import { Map , List } from 'immutable';
import { pender } from 'redux-pender';

import * as api from'lib/api';

const GET_SELLER_DETAIL = 'GET_SELLER_DETAIL';

export const getSellerDetail = createAction(GET_SELLER_DETAIL, api.getSellerId)

const initialState = Map({
  sellerDetail : List()
})

export default handleActions({
  ...pender({
    type : GET_SELLER_DETAIL,
    onSuccess : (state, action) => {
      const sellerDetail = action.payload.data;
      console.log(sellerDetail);
      return state.set('sellerDetail', sellerDetail)
    }
  })
}, initialState)