import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_SELLERS_LIST = 'GET_SELLERS_LIST';

export const getSellersList = createAction(GET_SELLERS_LIST, api.getSellersList);

const initialState = Map({
  sellers : List(),
  categories : List()
})


export default handleActions({
  ...pender({
    type: GET_SELLERS_LIST,
    onSuccess : (state,action) => {
      const  sellers = action.payload.data;
      console.log(sellers)
      //'sellers'는 initialState의 sellers
      //'sellers'에 actions.payload.data를 set
      return state.set('sellers', sellers.sellerList)
                  .set('categories',sellers.category)
                  
    }
  }),


}, initialState)
