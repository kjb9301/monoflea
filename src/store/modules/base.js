import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

const LOGIN = 'base/LOGIN';

export const login = createAction(LOGIN);

const initialState = Map({
  
});

export default handleActions({

}, initialState);