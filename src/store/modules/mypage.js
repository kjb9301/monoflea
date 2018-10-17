import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MYPAGE_DATA = 'mypage/GET_MYPAGE_DATA';
const GET_NAVLIST_HOST = 'mypage/GET_NAVLIST_HOST';
const GET_NAVLIST_SELLER = 'mypage/GET_NAVLIST_SELLER';
const GET_NAVLIST_USER = 'mypage/GET_NAVLIST_USER';
export const getMypageData = createAction(GET_MYPAGE_DATA, api.getMypageData);
export const getNavListHost = createAction(GET_NAVLIST_HOST);
export const getNavListSeller = createAction(GET_NAVLIST_SELLER);
export const getNavListUser = createAction(GET_NAVLIST_USER);

const initialState = fromJS({
  data: '',
  defaultNav : [{navs : '프로필', urls : 'a'},
                {navs : '좋아하는셀러', urls : '/mypages/like-seller'},
                {navs : '찜한클래스', urls : '/mypages/like-classes'}],
  sellerNavs : [
          {navs : '신청마켓', urls : '/mypages/apply-markets'}, 
          {navs : '주최클래스', urls : '/mypages/host-classes'}, 
          {navs : '신청클래스', urls : '/mypages/apply-classes'}],
         
  hostNav :  {navs : '주최마켓', urls : '/mypages/host-markets'},
  navList : ''
});

export default handleActions({
  ...pender({
    type: GET_MYPAGE_DATA,
    onSuccess: (state, action) => {
      console.log(action.payload.data);
      const { data } = action.payload
      return state.set('data', data);
    }
  }),
  [GET_NAVLIST_HOST] : (state,action) =>{
    let defaultNav = initialState.get('defaultNav')
    let hostNav = initialState.get('hostNav')
    const Hnav = defaultNav.push(hostNav).toJS();
    console.log(Hnav);

    return state.set('navList', Hnav);
  },
  [GET_NAVLIST_SELLER] : (state,action) =>{
    let defaultNav = initialState.get('defaultNav')
    let sellerNavs = initialState.get('sellerNavs')
    const Hnav = defaultNav.concat(sellerNavs).toJS();
    console.log(Hnav);

    return state.set('navList', Hnav);
  },
  [GET_NAVLIST_USER] : (state,action) =>{
    let defaultNav = initialState.get('defaultNav')
    let sellerNavs = initialState.get('sellerNavs')
    const Hnav = defaultNav.push(sellerNavs[2]).toJS();
    console.log(Hnav);
    return state.set('navList', Hnav);
  }
}, initialState);