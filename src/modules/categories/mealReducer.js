import * as categoriesActions from './categoriesActions';
import initialState from './initialState';


//Update the application state based on the given action.
const mealReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case categoriesActions.FETCH_MEAL_PENDING:
        return { ...state, loading: true };
       
    case categoriesActions.FETCH_MEAL_SUCCESS:
        //console.log(action.payload);

        state = Object.assign({},state, {loading: false}, {meal: action.payload.meals[0]});
        //console.log(state);
        return state;

    case categoriesActions.FETCH_MEAL_ERROR:
        //console.log(action.payload);  //returns an error object such as {status: 400, message: "Invalid request"}
        state = Object.assign({},state, {loading: false}, {error: action.payload});
        //console.log(state);
        return state;

    default:
        return state;
  }
};

export default mealReducer;
