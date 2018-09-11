import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const CHANGE_CLASS_INFO = 'classUI/CHANGE_CLASS_INFO';
const TOGGLE_EDIT = 'classUI/TOGGLE_EDIT';

export const changeClassInfo = createAction(CHANGE_CLASS_INFO);
export const toggleEdit = createAction(TOGGLE_EDIT);

const initialState = Map({
  classInfo: Map({
    class_category: '',
    class_name: '',
    class_place: '',
    event_date: '',
    recruit_start_date: '',
    recruit_end_date: '',
    class_limit_cnt: '',
    class_desc: '',
    class_img1: '',
    class_img2: '',
    class_img3: '',
    class_img4: '',
    class_img5: '',
  }),
  editing: false
});

export default handleActions({
  [CHANGE_CLASS_INFO]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['classInfo', name], value);
  },
  [TOGGLE_EDIT]: (state, action) => {
    return state.set('editing', !state.get('editing'));
  }
}, initialState);