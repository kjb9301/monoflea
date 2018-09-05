import {createAction,handleActions} from 'redux-actions';

import {Map, fromJS} from 'immutable';
import {pender} from 'redux-pender';

const SHOW_MODAL = 'modalVisible/SHOW_MODAL';
const HIDE_MODAL = 'modalVisible/HIDE_MODAL';
const CHANGE_INPUT = 'modalVisible/CHANGE_INPUT';
const EDIT_TF = 'modalVisible/EDIT_TF';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const changeInput = createAction(CHANGE_INPUT);
export const editTF = createAction(EDIT_TF);

const initialState = fromJS({
  modal: {
    market: false,
    seller : false,
    oneday : false,
    remove: false
  },
  market: {
    market_id: '',
    market_name: '',
    market_place: '',
    market_poster: '',
    market_period: '',
    end_date: '',
    market_desc: ''
  },
  editTF: false
});

export default handleActions({
  [SHOW_MODAL]: (state,action) => {
    const {modalName,marketDetail} = action.payload;
    const { 
      market_id, 
      market_name, 
      market_place, 
      market_poster,
      market_period,
      end_date,
      market_desc
    } = marketDetail;
    return state.setIn(['modal', modalName], true)
                .setIn([modalName, 'market_id'], market_id)
                .setIn([modalName, 'market_name'], market_name)
                .setIn([modalName, 'market_place'], market_place)
                .setIn([modalName, 'market_poster'], market_poster)
                .setIn([modalName, 'market_period'], market_period)
                .setIn([modalName, 'end_date'], end_date)
                .setIn([modalName, 'market_desc'], market_desc)
  },
  [HIDE_MODAL]: (state,action) => {
    const modalName = action.payload;
    return state.setIn(['modal', modalName], false);
  },
  [CHANGE_INPUT]: (state,action) => {
    const { name, value, modalName } = action.payload;
    //const obj = { [name]: value }
    return state.setIn([modalName,name], value);
  },
  [EDIT_TF]: (state,action) => {
    return state.set('editTF',true);
  }
}, initialState);