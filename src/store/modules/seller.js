import { createAction, handleActions} from 'redux-actions';
import { fromJS } from 'immutable';

import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_SELLRS_LIST ='seller/GET_SELLERS_LIST';
const UPDATE_SELLER = 'seller/UPDATE_SELLER';
const INCREMENT_LIKE = 'seller/INCREMENT_LIKE';
const DECREMENT_LIKE = 'seller/DECREMENT_LIKE';
const GET_ONE_SELLER = 'seller/GET_ONE_SELLER';
const INC_VIEW_CNT = 'seller/INC_VIEW_CNT';

export const getSellersList = createAction(GET_SELLRS_LIST, api.getSellersList);
export const updateSeller = createAction(UPDATE_SELLER, api.updateSeller);
export const incrementLike = createAction(INCREMENT_LIKE, api.incrementLike);
export const decrementLike = createAction(DECREMENT_LIKE, api.decrementLike);
export const getOneSeller = createAction(GET_ONE_SELLER,api.getOneSeller);
export const incViewCnt = createAction(INC_VIEW_CNT,api.incViewCnt)

const initialState = fromJS({
  sellers : [],
  categories : [],
  update : [],
  view_cnt : {},
  oneSeller : {  
    seller_id : '',
    sns: '',
    show_TF : true,
    career : '',
    seller_desc : '',
    view_cnt : '',
    like_cnt : 0,
    profile_img : '',
    user : {
              nickName : '',
    },
    seller_images : {
      imgUrl : ''
    },
    sellerCategory : {
      category_ko  : '' 
    }
  }
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
    // onSuccess : (state, action) => {
    // }
  }),
  ...pender({
    type: DECREMENT_LIKE,
    // onSuccess : (state, action) => {
    // }
  }),
  ...pender({
    type : INC_VIEW_CNT,
    // onSuccess : (state, action) => {
      // console.log(action.payload.data)
    // }
  }),
  ...pender({
    type : GET_ONE_SELLER,
    onSuccess : (state, action) => {
      const oneSeller = action.payload.data
      const { seller_id, career, sns, seller_desc, like_cnt, profile_img, view_cnt,
            show_TF, seller_images : imgUrl, user : nickName,
            sellerCategory : category_ko} = oneSeller;
    return state.setIn(['oneSeller','seller_id'], seller_id)
                .setIn(['oneSeller','user','nickName'], nickName )
                .setIn(['oneSeller','career'], career)
                .setIn(['oneSeller','sns'], sns)
                .setIn(['oneSeller','seller_desc'], seller_desc)
                .setIn(['oneSeller','profile_img'], profile_img)
                .setIn(['oneSeller','seller_images','imgUrl'], imgUrl)
                .setIn(['oneSeller','sellerCategory','category_ko'], category_ko)
                .setIn(['oneSeller', 'show_TF'], show_TF)
                .setIn(['oneSeller', 'like_cnt'],like_cnt)
                .setIn(['oneSeller','veiw_cnt'], view_cnt)
    }
  })
}, initialState)