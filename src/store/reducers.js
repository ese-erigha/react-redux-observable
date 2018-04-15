import { combineReducers } from 'redux';
import postsReducer from '../modules/posts/postsReducer';
import usersReducer from '../modules/users/usersReducer';
let rootReducer = combineReducers({usersState:usersReducer,postsState:postsReducer});
export default rootReducer; 
