import { createAction, handleActions } from 'redux-actions'
import { Link } from 'react-router-dom';
import { pender } from 'redux-pender';

import * as api from'lib/api';

const GET_SELLER_ID = 'GET_SELLER_ID';

export const getSellerId = createAction(GET_SELLER_ID, api.getSellerId)

const initialState = Map({

})