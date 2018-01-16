import { combineReducers } from 'redux';
import UserList from './userlist_reducer.js'; 

const rootReducer = combineReducers({
  users: UserList,
})

export default rootReducer;