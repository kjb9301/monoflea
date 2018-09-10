import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const CHANGE_CLASS_INFO = 'class/CHANGE_CLASS_INFO';

export const changeClassInfo = createAction(CHANGE_CLASS_INFO);

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
  })
});

export default handleActions({
  [CHANGE_CLASS_INFO]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['classInfo', name], value);
  }
}, initialState);