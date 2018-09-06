import { createAction , handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const SHOW_MODAL = 'sellerUI/SHOW_MODAL';
const HIDE_MODAL = 'sellerUI/HIDE_MODAL';
const EDIT_TF = 'sellerUI/EDIT_TF'

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

export const editRf = createAction(EDIT_TF);

const initialState = fromJS({
  modal : {
    seller : false
  },
  seller : {
    seller_id : '',
    user : {
      nickName : '',
    },
    career : '',
    seller_desc : '',
    profile_imgUrl : '',
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
   const { modalName, sellerDetail } = action.payload;
   const { seller_id, career,seller_desc, profile_imgUrl, seller_images : imgUrl,
             user : nickName, sellerCategory : category_ko} = sellerDetail;
    console.log(action.payload)
    return state.setIn(['modal',modalName], true)
                .setIn([modalName,'seller_id'], seller_id)
                .setIn([modalName,'user','nickName'], nickName )
                .setIn([modalName,'career'], career)
                .setIn([modalName,'seller_desc'], seller_desc)
                .setIn([modalName,'profile_imgUrl'], profile_imgUrl)
                .setIn([modalName,'seller_images.imgUrl'], imgUrl)
                .setIn([modalName,'sellerCategory.category_ko'], category_ko)
 },
 [HIDE_MODAL] : (state, action) =>{
   const modalName = action.payload;
   return state.setIn(['modal', modalName], false);
 },
 [EDIT_TF] : (state, action) =>{
   return state.set('editTF', true)
 }
 
}, initialState)