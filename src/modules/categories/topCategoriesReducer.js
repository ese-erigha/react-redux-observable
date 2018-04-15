import * as categoriesActions from './categoriesActions';
import initialState from './initialState';


//Update the application state based on the given action.
const topCategoriesReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case categoriesActions.FETCH_TOP_CATEGORIES_PENDING:
        return { ...state, loading: true };
       
    case categoriesActions.FETCH_TOP_CATEGORIES_SUCCESS:
        //console.log(action.payload);

        state = Object.assign({},state, {loading: false}, {categories: action.payload.categories});
        //console.log(state);
        return state;

    case categoriesActions.FETCH_TOP_CATEGORIES_ERROR:
        //console.log(action.payload);  //returns an error object such as {status: 400, message: "Invalid request"}
        state = Object.assign({},state, {loading: false}, {error: action.payload});
        //console.log(state);
        return state;

    default:
        return state;
  }
};

export default topCategoriesReducer;
