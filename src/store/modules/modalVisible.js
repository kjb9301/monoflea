import {createAction,handleActions} from 'redux-actions';

import {Map} from 'immutable';
import {pender} from 'redux-pender';

const SHOW_MODAL = 'modalVisible/SHOW_MODAL';
const HIDE_MODAL = 'modalVisible/HIDE_MODAL';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

const initialState = Map({
  modal: Map({
    market: false,
    seller : false,
    oneday : false,
    remove: false
  })
});

export default handleActions({
  [SHOW_MODAL]: (state,action) => {
    const modalName = action.payload;
    return state.setIn(['modal', modalName], true);
  },
  [HIDE_MODAL]: (state,action) => {
    const modalName = action.payload;
    return state.setIn(['modal', modalName], false);
  }
}, initialState);