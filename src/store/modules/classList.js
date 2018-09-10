import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_CLASS_LIST = 'GET_CLASS_LIST';

export const getClassList = createAction(GET_CLASS_LIST, api.getClassList);

const initialState = Map({
  classList : List(),
  categories : List(),
  bestClassList : List()
})

export default handleActions({
  ...pender({
    type: GET_CLASS_LIST,
    onSuccess : (state,action) => {
      const  classList  = action.payload.data;
      console.log('============= action.payload.data : classList ============');
      console.log(classList.category);
      console.log(classList.list);
      return state.set('classList', classList.list)
                  .set('categories', classList.category)
                  .set('bestClassList', classList.bestList)
    }
  })
}, initialState)