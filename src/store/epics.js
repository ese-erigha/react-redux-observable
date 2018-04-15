import { combineEpics } from 'redux-observable';
import {fetchUsersEpic} from '../modules/users/usersEpics';
import {fetchPostsEpic} from '../modules/posts/postsEpics'

let rootEpic =  combineEpics(
    fetchUsersEpic,fetchPostsEpic
)

export default rootEpic;