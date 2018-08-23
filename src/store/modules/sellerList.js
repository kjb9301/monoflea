import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_SELLERS_LIST = 'GET_SELLERS_LIST';

export const getSellersList = createAction(GET_SELLERS_LIST, api.getSellersList);

const initialState = Map({
  sellers : List()
})

export default handleActions({
  ...pender({
    type: GET_SELLERS_LIST,
    onSuccess : (state,action) => {
      const sellers = action.payload.data;
      console.log(sellers);
      return state.set('sellers', sellers);
    }
  })
}, initialState)
