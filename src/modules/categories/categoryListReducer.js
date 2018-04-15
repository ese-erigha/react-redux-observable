import * as categoriesActions from './categoriesActions';
import initialState from './initialState';


//Update the application state based on the given action.
const categoryListReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case categoriesActions.FETCH_CATEGORY_LIST_PENDING:
        return { ...state, loading: true };
       
    case categoriesActions.FETCH_CATEGORY_LIST_SUCCESS:
        //console.log(action.payload);
        state = Object.assign({},state, {loading: false}, {meals: action.payload.meals});
        //console.log(state);
        return state;

    case categoriesActions.FETCH_CATEGORY_LIST_ERROR:
        //console.log(action.payload);  //returns an error object such as {status: 400, message: "Invalid request"}
        state = Object.assign({},state, {loading: false}, {error: action.payload});
        //console.log(state);
        return state;

    default:
        return state;
  }
};

export default categoryListReducer;
