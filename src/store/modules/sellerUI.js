import { createAction , handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const SHOW_MODAL = 'sellerUI/SHOW_MODAL';
const HIDE_MODAL = 'sellerUI/HIDE_MODAL';
const EDIT_TF = 'sellerUI/EDIT_TF'
const DETAIL_DATA = 'sellerUI/DETAIL_DATA';
const CHANGED_DATA = 'sellerUI/CHANGED_DATA'
const SHOW_TF = 'sellerUI/SHOW_TF';
const CHANGED_LIKE_CNT = 'sellerUI/CHANGED_LIKE_CNT';
const SHOW_LOGGED_MODAL = 'selelrUI/SHOW_LOGGED_MODAL';
const HIDE_LOGGED_MODAL = 'sellerUI/HIDE_LOGGED_MODAL'

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const editTF = createAction(EDIT_TF);
export const detailData = createAction(DETAIL_DATA);
export const changedData =  createAction(CHANGED_DATA);
export const showTF = createAction(SHOW_TF);
export const changedLikeCnt = createAction(CHANGED_LIKE_CNT);
export const showLoggedModal = createAction(SHOW_LOGGED_MODAL);
export const hideLoggedModal = createAction(HIDE_LOGGED_MODAL);

const initialState = fromJS({
  modal : {
    seller : false,
    loggedSeller : false
  },
  seller : {
    seller_id : '',
    sns: '',
    show_TF : true,
    career : '',
    seller_desc : '',
    like_cnt : 0,
    view_cnt : '',
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
    return state.setIn(['modal',modalName], true)
 },
 [SHOW_LOGGED_MODAL] : (state, action) => {
  const  modalName = action.payload;
   return state.setIn(['modal',modalName], true)
 }
 ,
 [HIDE_MODAL] : (state, action) =>{
   const modalName = action.payload;
   return state.setIn(['modal', modalName], false);
 },
 [HIDE_LOGGED_MODAL] : (state, action) =>{
  const modalName = action.payload;
  return state.setIn(['modal', modalName], false);
},
 [SHOW_TF] : (state,action) => {
   const {name,value} = action.payload;
   return state.setIn(['seller', name], value);
 },
 [DETAIL_DATA] : (state, action) => {
    const { seller_id, career, sns, seller_desc, like_cnt, profile_img, view_cnt,
            show_TF, seller_images : imgUrl, user : nickName,
            sellerCategory : category_ko} = action.payload
    return state.setIn(['seller','seller_id'], seller_id)
                .setIn(['seller','user','nickName'], nickName )
                .setIn(['seller','career'], career)
                .setIn(['seller','sns'], sns)
                .setIn(['seller','seller_desc'], seller_desc)
                .setIn(['seller','profile_img'], profile_img)
                .setIn(['seller','seller_images','imgUrl'], imgUrl)
                .setIn(['seller','sellerCategory','category_ko'], category_ko)
                .setIn(['seller', 'show_TF'], show_TF)
                .setIn(['seller', 'like_cnt'],like_cnt)
                .setIn(['seller', 'view_cnt'], view_cnt)
 },
 [EDIT_TF] : (state, action) =>{
   const edit = action.payload;
   return state.set('editTF',!edit)
 },
 [CHANGED_DATA] : (state,action) => {
   const { name, value } = action.payload
  return state.setIn(['seller', name], value)
 },
 [CHANGED_LIKE_CNT] : (state, action) =>{
   let { payload: like_cnt } = action;
   return state.setIn(['seller', 'like_cnt'], like_cnt )
 }
 
}, initialState)