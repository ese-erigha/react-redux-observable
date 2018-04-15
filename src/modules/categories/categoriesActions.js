//top categories creators
export const FETCH_TOP_CATEGORIES = 'FETCH_TOP_CATEGORIES';
export const FETCH_TOP_CATEGORIES_PENDING = 'FETCH_TOP_CATEGORIES_PENDING';
export const FETCH_TOP_CATEGORIES_SUCCESS = 'FETCH_TOP_CATEGORIES_SUCCESS';
export const FETCH_TOP_CATEGORIES_ERROR = 'FETCH_TOP_CATEGORIES_ERROR';


//category list creators
export const FETCH_CATEGORY_LIST = 'FETCH_CATEGORY_LIST';
export const FETCH_CATEGORY_LIST_PENDING = 'FETCH_CATEGORY_LIST_PENDING';
export const FETCH_CATEGORY_LIST_SUCCESS = 'FETCH_CATEGORY_LIST_SUCCESS';
export const FETCH_CATEGORY_LIST_ERROR = 'FETCH_CATEGORY_LIST_ERROR';


//fetch meal creators
export const FETCH_MEAL = 'FETCH_MEAL';
export const FETCH_MEAL_PENDING = 'FETCH_MEAL_PENDING';
export const FETCH_MEAL_SUCCESS = 'FETCH_MEAL_SUCCESS';
export const FETCH_MEAL_ERROR = 'FETCH_MEAL_ERROR';



//Fetch Top Categories
export const fetchTopCategoriesAction = () => ({ type: FETCH_TOP_CATEGORIES});
export const fetchTopCategoriesSuccessAction = payload => ({ type: FETCH_TOP_CATEGORIES_SUCCESS, payload });
export const fetchTopCategoriesErrorAction = payload => ({ type: FETCH_TOP_CATEGORIES_ERROR, payload });


//Fetch Category List
export const fetchCategoryListAction = (payload) => ({ type: FETCH_CATEGORY_LIST,payload});
export const fetchCategoryListSuccessAction = payload => ({ type: FETCH_CATEGORY_LIST_SUCCESS, payload });
export const fetchCategoryListErrorAction = payload => ({ type: FETCH_CATEGORY_LIST_ERROR, payload });


//Fetch Meal
export const fetchMealAction = (payload) => ({ type: FETCH_MEAL,payload});
export const fetchMealSuccessAction = payload => ({ type: FETCH_MEAL_SUCCESS, payload });
export const fetchMealErrorAction = payload => ({ type: FETCH_MEAL_ERROR, payload });

