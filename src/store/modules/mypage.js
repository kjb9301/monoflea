import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MYPAGE_DATA = 'mypage/GET_MYPAGE_DATA';
const GET_NAVLIST_HOST = 'mypage/GET_NAVLIST_HOST';
const GET_NAVLIST_SELLER = 'mypage/GET_NAVLIST_SELLER';
const GET_NAVLIST_USER = 'mypage/GET_NAVLIST_USER';
const GET_URL = 'mypage/GET_URL';
const GET_MARKET_PLACE = 'mypage/GET_MARKET_PLACE';
const TOGGLE_EDIT = 'mypage/TOGGLE_EDIT';
const GET_APPLY_LIST = 'mypage/GET_APPLY_LIST';
const SET_PROFILE = 'mypage/SET_PROFILE';
const CHANGE_PROFILE = 'mypage/CHANGE_PROFILE';
const UPDATE_PROFILE = 'mypage/UPDATE_PROFILE';

export const getMypageData = createAction(GET_MYPAGE_DATA, api.getMypageData);
export const getNavListHost = createAction(GET_NAVLIST_HOST);
export const getNavListSeller = createAction(GET_NAVLIST_SELLER);
export const getNavListUser = createAction(GET_NAVLIST_USER);
export const getUrl =  createAction(GET_URL);
export const getMarketPlace = createAction(GET_MARKET_PLACE, api.getMarketPlace);
export const toggleEdit = createAction(TOGGLE_EDIT);
export const getApplyList = createAction(GET_APPLY_LIST);
export const setProfile = createAction(SET_PROFILE);
export const changeProfile = createAction(CHANGE_PROFILE);
export const updateProfile = createAction(UPDATE_PROFILE, api.updateProfile);

const initialState = fromJS({
  data: '',
  defaultNav : [{navs : '프로필', urls : '/mypages/profile'},
                {navs : '좋아하는셀러', urls : '/mypages/like-seller'},
                {navs : '찜한클래스', urls : '/mypages/like-class'}],
  sellerNavs : [
          {navs : '신청마켓', urls : '/mypages/apply-markets'}, 
          {navs : '주최클래스', urls : '/mypages/host-classes'}, 
          {navs : '신청클래스', urls : '/mypages/apply-classes'}],
         
  hostNav :  {navs : '주최마켓', urls : '/mypages/host-markets'},
  navList : '',
  url : '',
  marketPlace: '',
  applyData: '',
  editTF: false,
  userProfile: {
    profile: '',
    nickName: '',
    tel: ''
  }
});

export default handleActions({
  [SET_PROFILE]: (state, action) => {
    const { profile_img, nickName, tel } = action.payload;
    return state.setIn(['userProfile', 'profile'], profile_img)
                .setIn(['userProfile', 'nickName'], nickName)
                .setIn(['userProfile', 'tel'], tel);
  },
  ...pender({
    type: GET_MYPAGE_DATA,
    onSuccess: (state, action) => {
      const { data } = action.payload;
      return state.set('data', data);
    }
  }),
  ...pender({
    type: GET_MARKET_PLACE,
    onSuccess: (state, action) => {
      return state.set('marketPlace', action.payload.data);
    }
  }),
  [GET_NAVLIST_HOST] : (state,action) =>{
    let defaultNav = initialState.get('defaultNav')
    let hostNav = initialState.get('hostNav')
    const Hnav = defaultNav.push(hostNav).toJS();
    return state.set('navList', Hnav);
  },
  [GET_NAVLIST_SELLER] : (state,action) =>{
    let defaultNav = initialState.get('defaultNav')
    let sellerNavs = initialState.get('sellerNavs')
    const Hnav = defaultNav.concat(sellerNavs).toJS();
    return state.set('navList', Hnav);
  },
  [GET_NAVLIST_USER] : (state,action) =>{
    let defaultNav = initialState.get('defaultNav')
    let sellerNavs = initialState.get('sellerNavs')
    let sellerNav = sellerNavs.toJS()[2];
    const Hnav = defaultNav.concat(sellerNav).toJS();
    return state.set('navList', Hnav);
  },
  [GET_URL] : (state, action) => {
    return state.set('url',action.payload);
  },
  [TOGGLE_EDIT]: (state,action) => {
    const editTF = action.payload;
    return (editTF === true? state.set('editTF',false) : state.set('editTF',true));
  },
  [GET_APPLY_LIST] : (state, action) => {
    const applyList = action.payload;
    return state.set('applyData',applyList);
  },
  [CHANGE_PROFILE]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['userProfile', name], value);
  }
}, initialState);