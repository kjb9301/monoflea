import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_CLASS_LIST = 'GET_CLASS_LIST';

export const getClassList = createAction(GET_CLASS_LIST, api.getClassList);

const initialState = Map({
  classList : List(),
  categories : List(),
  bestClassList : List(),
  classDetail: Map({})
})

export default handleActions({
  ...pender({
    type: GET_CLASS_LIST,
    onSuccess : (state,action) => {
      const { classList, categories } = action.payload.data;
      return state.set('classList', classList)
                  .set('categories', categories);
    }
  })
}, initialState)