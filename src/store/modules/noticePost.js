import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const CHANGE_INPUT_TITLE = 'notices/CHANGE_INPUT_TITLE';
const CHANGE_INPUT_CONTENT = 'notices/CHANGE_INPUT_CONTENT';

export const changeInputTitle = createAction(CHANGE_INPUT_TITLE);
export const changeInputContent = createAction(CHANGE_INPUT_CONTENT);

const initialState = Map({
  title: '',
  content: '',
  img_file: ''
});

export default handleActions({
  [CHANGE_INPUT_TITLE]: (state, action) => {
    const { payload: title } = action;
    return state.set('title', title);
  },
  [CHANGE_INPUT_CONTENT]: (state, action) => {
    const{ payload: content } = action;
    return state.set('content', content);
  }
}, initialState);