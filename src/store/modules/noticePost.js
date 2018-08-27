import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const POST_NEW_NOTICE = 'notices/POST_NEW_NOTICE';
const CHANGE_INPUT_TITLE = 'notices/CHANGE_INPUT_TITLE';
const CHANGE_INPUT_CONTENT = 'notices/CHANGE_INPUT_CONTENT';

export const postNewNotice = createAction(POST_NEW_NOTICE, api.postNewNotice);
export const changeInputTitle = createAction(CHANGE_INPUT_TITLE);
export const changeInputContent = createAction(CHANGE_INPUT_CONTENT);

const initialState = Map({
  title: '',
  content: '',
  img_file: ''
});

export default handleActions({
  ...pender({
    type: POST_NEW_NOTICE,
    onSuccess: (state, action) => {
      console.log(action);
    }
  }),
  [CHANGE_INPUT_TITLE]: (state, action) => {
    const { payload: title } = action;
    return state.set('title', title);
  },
  [CHANGE_INPUT_CONTENT]: (state, action) => {
    const{ payload: content } = action;
    return state.set('content', content);
  }
}, initialState);