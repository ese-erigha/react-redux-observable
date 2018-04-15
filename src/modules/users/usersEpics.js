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

// export const fetchCategoryListEpic = action$ =>

//             action$.ofType(categoriesActions.FETCH_CATEGORY_LIST)
//             .switchMap(action =>{
//                 return Observable.fromPromise(http.get(`${categoryListBaseUrl}${action.payload}`))
//                                  .map(response => categoriesActions.fetchCategoryListSuccessAction(response))
//                                  .startWith({type: categoriesActions.FETCH_CATEGORY_LIST_PENDING})
//                                  .catch((error)=>{
//                                     return Observable.of(categoriesActions.fetchCategoryListErrorAction(error));
//                                  });
//             });


// export const fetchMealEpic = action$ =>

//             action$.ofType(categoriesActions.FETCH_MEAL)
//             .switchMap(action =>{
//                 return Observable.fromPromise(http.get(`${mealBaseUrl}${action.payload}`))
//                                  .map(response => categoriesActions.fetchMealSuccessAction(response))
//                                  .startWith({type: categoriesActions.FETCH_MEAL_PENDING})
//                                  .catch((error)=>{
//                                     return Observable.of(categoriesActions.fetchMealErrorAction(error));
//                                  });
//             });
