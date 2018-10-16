import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const CHANGE_CLASS_INFO = 'classUI/CHANGE_CLASS_INFO';
const SET_CLASS_INFO = 'classUI/SET_CLASS_INFO';
const TOGGLE_EDIT = 'classUI/TOGGLE_EDIT';
const INITIALIZE_EDITING_STATE = 'classUI/INITIALIZE_EDITING_STATE';
const CHANGE_ENROLL_INFO = 'classUI/CHANGE_ENROLL_INFO';

export const changeClassInfo = createAction(CHANGE_CLASS_INFO);
export const setClassInfo = createAction(SET_CLASS_INFO);
export const toggleEdit = createAction(TOGGLE_EDIT);
export const initializeEditState = createAction(INITIALIZE_EDITING_STATE);
export const changeEnrollInfo = createAction(CHANGE_ENROLL_INFO);

const initialState = fromJS({
  classInfo: {
    class_category_id: '',
    class_desc: '',
    class_id: '',
    class_limit_cnt: '',
    class_name: '',
    class_place: '',
    class_reg_cnt: '',
    event_date: '',
    view_cnt: '',
    onedayCategory: {
      class_category_id: '',
      category_name: '',
      category_ko_name: '',
    },
    onedayImages: [

    ],
    onedayRegs: [],
    recruit_start_date: '',
    recruit_end_date: '',
    reg_date: '',
    seller: {
      profile_img: '',
      user: {
        nickName: ''
      }
    },
    seller_id: '',
  },
  enroll: {
    name: '',
    tel: '',
  },
  editing: false,
});

export default handleActions({
  [CHANGE_CLASS_INFO]: (state, action) => {
    const { name, value } = action.payload;
    return name === 'class_category_id' ? 
           state.setIn(['classInfo', 'onedayCategory', name], value) :
            state.setIn(['classInfo', name], value);
  },
  [CHANGE_ENROLL_INFO]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['enroll', name], value);
  },
  [SET_CLASS_INFO]: (state, action) => {
    const { 
      class_category_id, class_desc, class_id, class_limit_cnt, view_cnt,
      class_name, class_place, class_reg_cnt, event_date, onedayCategory,
      onedayImages, recruit_start_date, recruit_end_date, reg_date, seller, onedayRegs
    } = action.payload.data;
    return state.setIn(['classInfo', 'class_category_id'], class_category_id)
                .setIn(['classInfo', 'class_desc'], class_desc)
                .setIn(['classInfo', 'class_id'], class_id)
                .setIn(['classInfo', 'class_limit_cnt'], class_limit_cnt)
                .setIn(['classInfo', 'class_name'], class_name)
                .setIn(['classInfo', 'class_place'], class_place)
                .setIn(['classInfo', 'class_reg_cnt'], class_reg_cnt)
                .setIn(['classInfo', 'event_date'], event_date)
                .setIn(['classInfo', 'view_cnt'], view_cnt)
                .setIn(['classInfo', 'onedayRegs'], onedayRegs)
                .setIn(['classInfo', 'onedayCategory', 'category_ko_name'], onedayCategory.category_ko_name)
                .setIn(['classInfo', 'onedayCategory', 'category_name'], onedayCategory.category_name)
                .setIn(['classInfo', 'onedayCategory', 'class_category_id'], onedayCategory.class_category_id)
                .setIn(['classInfo', 'onedayImages'], onedayImages)
                .setIn(['classInfo', 'recruit_start_date'], recruit_start_date)
                .setIn(['classInfo', 'recruit_end_date'], recruit_end_date)
                .setIn(['classInfo', 'reg_date'], reg_date)
                .setIn(['classInfo', 'seller'], seller)
  },
  [INITIALIZE_EDITING_STATE]: (state, action) => {
    return state.set('editing', initialState.get('editing'));
  },
  [TOGGLE_EDIT]: (state, action) => {
    return state.set('editing', !state.get('editing'));
  }
}, initialState);