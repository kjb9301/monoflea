import { createAction , handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const SHOW_MODAL = 'sellerUI/SHOW_MODAL';
const HIDE_MODAL = 'sellerUI/HIDE_MODAL';
const EDIT_TF = 'sellerUI/EDIT_TF'
const DETAIL_DATA = 'sellerUI/DETAIL_DATA';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const editRf = createAction(EDIT_TF);
export const detailData = createAction(DETAIL_DATA);

const initialState = fromJS({
  modal : {
    seller : false
  },
  seller : {
    seller_id : '',
    sns: '',
    career : '',
    seller_desc : '',
    profile_img : '',
    user : {
              nickName : '',
    },
    seller_images : {
      imgUrl : ''
    },
    sellerCategory : {
      category_ko  : '' 
    },
  },
  editTF : false
})

export default handleActions({
 [SHOW_MODAL] : (state, action) => {
   const { modalName} = action.payload;
    return state.setIn(['modal',modalName], true)
 },
 [HIDE_MODAL] : (state, action) =>{
   const modalName = action.payload;
   return state.setIn(['modal', modalName], false);
 },
 [DETAIL_DATA] : (state, action) => {
    const {sellerDetail} = action.payload
    const { seller_id, career, sns, seller_desc, profile_img, seller_images : imgUrl,
    user : nickName, sellerCategory : category_ko} = sellerDetail;
    return state.setIn(['seller','seller_id'], seller_id)
                .setIn(['seller','user','nickName'], nickName )
                .setIn(['seller','career'], career)
                .setIn(['seller','sns'], sns)
                .setIn(['seller','seller_desc'], seller_desc)
                .setIn(['seller','profile_img'], profile_img)
                .setIn(['seller','seller_images','imgUrl'], imgUrl)
                .setIn(['seller','sellerCategory','category_ko'], category_ko)
 }
 ,
 [EDIT_TF] : (state, action) =>{
   return state.set('editTF', true)
 }
 
}, initialState)