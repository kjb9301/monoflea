import { createAction, handleActions} from 'redux-actions';
import { fromJS } from 'immutable';

import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_SELLRS_LIST ='seller/GET_SELLERS_LIST';

export const getSellersList = createAction(GET_SELLRS_LIST,api.getSellersList);

const initialState = fromJS({
  sellers : [],
  categories : [],
  update : []
})

export default handleActions({
  ...pender({
    type : GET_SELLRS_LIST,
    onSuccess : (state, action) =>{
      const sellers = action.payload.data;
      return state.set('sellers',  sellers.sellerList)
                  .set('categories', sellers.category)
                  //.set('update' , sellers.update )
    }
  })
}, initialState)