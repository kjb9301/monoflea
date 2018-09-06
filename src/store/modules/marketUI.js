import {createAction,handleActions} from 'redux-actions';
import {fromJS} from 'immutable';

const SHOW_MODAL = 'marketUI/SHOW_MODAL';
const HIDE_MODAL = 'marketUI/HIDE_MODAL';
const INPUT_VALUE = 'marketUI/INPUT_VALUE';
const CHANGE_INPUT = 'marketUI/CHANGE_INPUT';
const EDIT_TF = 'marketUI/EDIT_TF';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const inputValue = createAction(INPUT_VALUE);
export const changeInput = createAction(CHANGE_INPUT);
export const editTF = createAction(EDIT_TF);

const initialState = fromJS({
  modal: {
    market: false,
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
    const modalName = action.payload;
    return state.setIn(['modal', modalName], true);
  },
  [HIDE_MODAL]: (state,action) => {
    const modalName = action.payload;
    return state.setIn(['modal', modalName], false);
  },
  [INPUT_VALUE]: (state,action) => {
    const {marketDetail} = action.payload;
    const {
      market_id, 
      market_name, 
      market_place, 
      market_poster,
      market_period,
      end_date,
      market_desc
    } = marketDetail;

    return state.setIn(['market', 'market_id'], market_id)
                .setIn(['market', 'market_name'], market_name)
                .setIn(['market', 'market_place'], market_place)
                .setIn(['market', 'market_poster'], market_poster)
                .setIn(['market', 'market_period'], market_period)
                .setIn(['market', 'end_date'], end_date)
                .setIn(['market', 'market_desc'], market_desc);
  },
  [CHANGE_INPUT]: (state,action) => {
    const { name, value } = action.payload;
    return state.setIn(['market',name], value);
  },
  [EDIT_TF]: (state,action) => {
    const editTF = action.payload;
    return (editTF === true? state.set('editTF',false) : state.set('editTF',true));
  }
}, initialState);