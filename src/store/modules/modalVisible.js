import {createAction,handleActions} from 'redux-actions';

import {Map, fromJS} from 'immutable';
import {pender} from 'redux-pender';

const SHOW_MODAL = 'modalVisible/SHOW_MODAL';
const HIDE_MODAL = 'modalVisible/HIDE_MODAL';
const CHANGE_INPUT = 'modalVisible/CHANGE_INPUT';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const changeInput = createAction(CHANGE_INPUT);

const initialState = Map({
  modal: Map({
    market: false,
    seller : false,
    remove: false
  }),
  market: Map({
    id: '',
    name: '',
    place: '',
    poster: '',
    period: '',
    endDate: '',
    desc: '',
    editTF: false
  })
});

export default handleActions({
  [SHOW_MODAL]: (state,action) => {
    const {modalName,marketDetail} = action.payload;
    return state.setIn(['modal', modalName], true)
                .set(modalName,marketDetail);
  },
  [HIDE_MODAL]: (state,action) => {
    const modalName = action.payload;
    return state.setIn(['modal', modalName], false);
  },
  [CHANGE_INPUT]: (state,action) => {
    const { name, value, modalName } = action.payload;
    console.log(action.payload)
    return state.setIn([modalName, name], value)
  }
}, initialState);