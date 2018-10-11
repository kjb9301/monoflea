import {createAction,handleActions} from 'redux-actions';
import {fromJS} from 'immutable';

const SHOW_MODAL = 'marketUI/SHOW_MODAL';
const HIDE_MODAL = 'marketUI/HIDE_MODAL';
const GET_VALUE = 'marketUI/GET_VALUE';
const CHANGE_INPUT = 'marketUI/CHANGE_INPUT';
const EDIT_TF = 'marketUI/EDIT_TF';
const PREV_MONTH = 'marketUI/PREV_MONTH';
const NEXT_MONTH = 'marketUI/NEXT_MONTH';
const PREV_WEEK = 'marketUI/PREV_WEEK';
const NEXT_WEEK = 'marketUI/NEXT_WEEK';
const GET_SELECTED_DATE = 'marketUI/GET_SELECTED_DATE';
const TOGGLE_MORE_STATE = 'marketUI/TOGGLE_MORE_STATE';
const SELECT_BY_DATE = 'marketUI/SELECT_BY_DATE';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const getValue = createAction(GET_VALUE);
export const changeInput = createAction(CHANGE_INPUT);
export const editTF = createAction(EDIT_TF);
export const prevMonth = createAction(PREV_MONTH);
export const nextMonth = createAction(NEXT_MONTH);
export const prevWeek = createAction(PREV_WEEK);
export const nextWeek = createAction(NEXT_WEEK);
export const getSelectedDate = createAction(GET_SELECTED_DATE);
export const toggleMoreState = createAction(TOGGLE_MORE_STATE);
export const selectByDate = createAction(SELECT_BY_DATE);

const initialState = fromJS({
  modal: {
    market: false,
    remove: false,
    apply: false
  },
  market: {
    host_id: '',
    market_id: '',
    market_name: '',
    market_place: '',
    market_poster: '',
    start_date: '',
    end_date: '',
    market_desc: '',
    seller_cnt: '',
    seller_limit_cnt: '',
    market_regs: [],
    reg_start_date: '',
    reg_end_date: '',
    confirmYN: ''
  },
  calendar: {
    today: new Date(),
    currentDate: new Date(),
    selectedDate: new Date()
  },
  editTF: false,
  hasMore: true,
  isSelectedByDate: false
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
  [GET_VALUE]: (state,action) => {
    const {marketDetail} = action.payload;
    const {
      host_id,
      market_id, 
      market_name, 
      market_place, 
      market_poster,
      start_date,
      end_date,
      market_desc,
      seller_cnt,
      seller_limit_cnt,
      market_regs,
      reg_start_date,
      reg_end_date,
      confirmYN
    } = marketDetail;

    return state.setIn(['market', 'market_id'], market_id)
                .setIn(['market', 'market_name'], market_name)
                .setIn(['market', 'market_place'], market_place)
                .setIn(['market', 'market_poster'], market_poster)
                .setIn(['market', 'start_date'], start_date)
                .setIn(['market', 'end_date'], end_date)
                .setIn(['market', 'market_desc'], market_desc)
                .setIn(['market','seller_cnt'],seller_cnt)
                .setIn(['market','seller_limit_cnt'],seller_limit_cnt)
                .setIn(['market','market_regs'],market_regs)
                .setIn(['market','reg_start_date'],reg_start_date)
                .setIn(['market','reg_end_date'],reg_end_date)
                .setIn(['market','confirmYN'],confirmYN)
                .setIn(['market', 'host_id'], host_id);
  },
  [CHANGE_INPUT]: (state,action) => {
    const { name, value } = action.payload;
    return state.setIn(['market',name], value);
  },
  [EDIT_TF]: (state,action) => {
    const editTF = action.payload;
    return (editTF === true? state.set('editTF',false) : state.set('editTF',true));
  },
  [PREV_MONTH]: (state,action) => {
    const prevMonth = action.payload;
    return state.setIn(['calendar','currentDate'],prevMonth);
  },
  [NEXT_MONTH]: (state,action) => {
    const nextMonth = action.payload;
    return state.setIn(['calendar','currentDate'],nextMonth);
  },
  [PREV_WEEK]: (state,action) => {
    const prevWeek = action.payload;
    return state.setIn(['calendar','currentDate'],prevWeek);
  },
  [NEXT_WEEK]: (state,action) => {
    const nextWeek = action.payload;
    return state.setIn(['calendar','currentDate'],nextWeek);
  },
  [GET_SELECTED_DATE]: (state,action) => {
    const selectedDate = action.payload;
    return state.setIn(['calendar','selectedDate'],selectedDate);
  },
  [TOGGLE_MORE_STATE]: (state, action) => {
    console.log(action.payload)
    return state.set('hasMore', action.payload);
  },
  [SELECT_BY_DATE]: (state,action) => {
    const selectByDate = action.payload;
    return (selectByDate === true? state.set('isSelectedByDate',false) : state.set('isSelectedByDate',true));
  }
}, initialState);