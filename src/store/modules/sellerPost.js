import { createAction, handelActions } from 'redux-actions'
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import  * as api from 'lib/api'

const POST_SELLER = 'POST_SELLER';

const postSeller = createAction('POST_SELLER',api.postSeller);

const initialState = Map({
  newSeller : null
})

export default handelActions({
  ...pender({
    type : POST_SELLER,
    onSuccess : (state, action) => {
      const { _id } = action.payload.data;
      return state.set('newSeller', _id);
    }
  })
})