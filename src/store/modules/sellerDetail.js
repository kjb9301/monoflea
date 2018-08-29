import { createAction, handleActions } from 'redux-actions'
import { Map , List } from 'immutable';
import { pender } from 'redux-pender';

import * as api from'lib/api';

const GET_SELLER_ID = 'GET_SELLER_ID';

export const getSellerId = createAction(GET_SELLER_ID, api.getSellerId)

const initialState = Map({
  sellerDetail : Map({
    
  })
})