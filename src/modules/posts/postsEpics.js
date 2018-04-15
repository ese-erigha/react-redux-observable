import {Observable} from 'rxjs';
import * as postsActions from './postsActions';
import http from '../../utils/http';


//API endpoints for retrieving data
let postsBaseUrl = "https://jsonplaceholder.typicode.com/posts?userId=";


// An Epic operates on a stream of actions (by convention we suffix action with
// a dollar sign to indicate a stream of actions).
export const fetchPostsEpic = action$ =>

        action$.ofType(postsActions.FETCH_POSTS)
        .switchMap(action => {

            return Observable.fromPromise(http.get(`${postsBaseUrl}${action.payload}`))
                             .map(response => postsActions.fetchPostsSuccessAction(response))
                             .startWith({type: postsActions.FETCH_POSTS_PENDING})
                             .catch((error)=>{
                                 //console.log(error);
                                 return Observable.of(postsActions.fetchPostsErrorAction(error));
                             });
        });