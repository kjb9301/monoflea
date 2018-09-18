import { createAction, handleActions} from 'redux-actions';
import { fromJS } from 'immutable';

import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_SELLRS_LIST ='seller/GET_SELLERS_LIST';
const UPDATE_SELLER = 'seller/UPDATE_SELLER';
const INCREMENT_LIKE = 'seller/INCREMENT_LIKE';
const DECREMENT_LIKE = 'seller/DECREMENT_LIKE';

export const getSellersList = createAction(GET_SELLRS_LIST, api.getSellersList);
export const updateSeller = createAction(UPDATE_SELLER, api.updateSeller);
export const incrementLike = createAction(INCREMENT_LIKE, api.incrementLike);
export const decrementLike = createAction(DECREMENT_LIKE, api.decrementLike);

const initialState = fromJS({
  sellers : [],
  categories : [],
  update : [],
  likeUP : []
})

export default handleActions({
  ...pender({
    type : GET_SELLRS_LIST,
    onSuccess : (state, action) =>{
      const sellers = action.payload.data;
      return state.set('sellers',  sellers.sellerList)
                  .set('categories', sellers.category)
    }
  }),
  ...pender({
    type : UPDATE_SELLER,
    onSuccess : (state, action) =>{
      const newData = action.payload.data;
      return state.set('update', newData);
    }
  }),
  ...pender({
    type: INCREMENT_LIKE,
    onSuccess : (state, action) => {
      console.log(action.payload.data)
      // const likeUP = action.payload.data ;
      // return state.set('likeUP', likeUP);
    }
  }),
  ...pender({
    type: DECREMENT_LIKE,
    onSuccess : (state, action) => {
      console.log(action.payload.data)
      // const likeUP = action.payload.data ;
      // return state.set('likeUP', likeUP);
    }
  }),
  // ...pender({
  //   type : DECREMENT_LIKE,
  //   onSuccess : (state, action) => {
  //     console.log(action.payload)
  //   }
  // })
}, initialState)