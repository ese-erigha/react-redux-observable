import {Observable} from 'rxjs';
import * as usersActions from './usersActions';
import http from '../../utils/http';


//API endpoints for retrieving data
let usersUrl = "https://jsonplaceholder.typicode.com/users";

// An Epic operates on a stream of actions (by convention we suffix action with
// a dollar sign to indicate a stream of actions).
export const fetchUsersEpic = action$ =>

        action$.ofType(usersActions.FETCH_USERS)
        .switchMap(action => {

            return Observable.fromPromise(http.get(usersUrl))
                             .map(response => usersActions.fetchUsersSuccessAction(response))
                             .startWith({type: usersActions.FETCH_USERS_PENDING})
                             .catch((error)=>{
                                 //console.log(error);
                                 return Observable.of(usersActions.fetchUsersErrorAction(error));
                             });
        });
