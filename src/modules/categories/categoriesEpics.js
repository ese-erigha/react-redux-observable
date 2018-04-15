import {Observable} from 'rxjs';
import * as categoriesActions from './categoriesActions';
import http from '../../utils/http';


//API endpoints for retrieving data
let topCategoriesUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
let categoryListBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
let mealBaseUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";


// An Epic operates on a stream of actions (by convention we suffix action with
// a dollar sign to indicate a stream of actions).
export const fetchTopCategoriesEpic = action$ =>

        action$.ofType(categoriesActions.FETCH_TOP_CATEGORIES)
        .switchMap(action => {

            return Observable.fromPromise(http.get(topCategoriesUrl))
                             .map(response => categoriesActions.fetchTopCategoriesSuccessAction(response))
                             .startWith({type: categoriesActions.FETCH_TOP_CATEGORIES_PENDING})
                             .catch((error)=>{
                                 //console.log(error);
                                 return Observable.of(categoriesActions.fetchTopCategoriesErrorAction(error));
                             });
        });

export const fetchCategoryListEpic = action$ =>

            action$.ofType(categoriesActions.FETCH_CATEGORY_LIST)
            .switchMap(action =>{
                return Observable.fromPromise(http.get(`${categoryListBaseUrl}${action.payload}`))
                                 .map(response => categoriesActions.fetchCategoryListSuccessAction(response))
                                 .startWith({type: categoriesActions.FETCH_CATEGORY_LIST_PENDING})
                                 .catch((error)=>{
                                    return Observable.of(categoriesActions.fetchCategoryListErrorAction(error));
                                 });
            });


export const fetchMealEpic = action$ =>

            action$.ofType(categoriesActions.FETCH_MEAL)
            .switchMap(action =>{
                return Observable.fromPromise(http.get(`${mealBaseUrl}${action.payload}`))
                                 .map(response => categoriesActions.fetchMealSuccessAction(response))
                                 .startWith({type: categoriesActions.FETCH_MEAL_PENDING})
                                 .catch((error)=>{
                                    return Observable.of(categoriesActions.fetchMealErrorAction(error));
                                 });
            });
