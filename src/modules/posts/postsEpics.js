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
