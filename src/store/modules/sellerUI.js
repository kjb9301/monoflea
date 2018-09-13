import { createAction , handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const SHOW_MODAL = 'sellerUI/SHOW_MODAL';
const HIDE_MODAL = 'sellerUI/HIDE_MODAL';
const EDIT_TF = 'sellerUI/EDIT_TF'
const DETAIL_DATA = 'sellerUI/DETAIL_DATA';
const CHANGED_DATA = 'sellerUI/CHANGED_DATA'
const SHOW_TF = 'sellerUI/SHOW_TF';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const editTF = createAction(EDIT_TF);
export const detailData = createAction(DETAIL_DATA);
export const changedData =  createAction(CHANGED_DATA);
export const showTF = createAction(SHOW_TF);

const initialState = fromJS({
  modal : {
    seller : false
  },
  seller : {
    seller_id : '',
    sns: '',
    show_TF : true,
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
   const  modalName = action.payload;
   console.log(modalName)
    return state.setIn(['modal',modalName], true)
 },
 [HIDE_MODAL] : (state, action) =>{
   const modalName = action.payload;
   return state.setIn(['modal', modalName], false);
 },
 [SHOW_TF] : (state,action) => {
   const {name,value} = action.payload;
   return state.setIn(['seller', name], value);
 },
 [DETAIL_DATA] : (state, action) => {
    const {sellerDetail} = action.payload
    const { seller_id, career, sns, seller_desc, profile_img, show_TF, seller_images : imgUrl,
    user : nickName, sellerCategory : category_ko} = sellerDetail;
    return state.setIn(['seller','seller_id'], seller_id)
                .setIn(['seller','user','nickName'], nickName )
                .setIn(['seller','career'], career)
                .setIn(['seller','sns'], sns)
                .setIn(['seller','seller_desc'], seller_desc)
                .setIn(['seller','profile_img'], profile_img)
                .setIn(['seller','seller_images','imgUrl'], imgUrl)
                .setIn(['seller','sellerCategory','category_ko'], category_ko)
                .setIn(['seller', 'show_TF'], show_TF)
 },
 [EDIT_TF] : (state, action) =>{
   const edit = action.payload;
   return state.set('editTF',!edit)
 },
 [CHANGED_DATA] : (state,action) => {
   const { name, value } = action.payload
  return state.setIn(['seller', name], value)

 }
 
}, initialState)