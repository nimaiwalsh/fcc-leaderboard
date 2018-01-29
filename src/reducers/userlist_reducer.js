import { FETCH_USERS } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USERS:
      return action.payload.data
    default:
      return state;
  }
}