import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MYPAGE_DATA = 'mypage/GET_MYPAGE_DATA';

export const getMypageData = createAction(GET_MYPAGE_DATA, api.getMypageData);

const initialState = fromJS({
  data: ''
});

export default handleActions({
  ...pender({
    type: GET_MYPAGE_DATA,
    onSuccess: (state, action) => {
      console.log(action.payload.data);
      return state.set('data', action.payload.data);
    }
  })
}, initialState);