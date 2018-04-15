import * as usersActions from './usersActions';
import initialState from '../../shared/models/initialState';


//Update the application state based on the given action.
const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case usersActions.FETCH_USERS_PENDING:
        return { ...state, loading: true };
       
    case usersActions.FETCH_USERS_SUCCESS:
        //console.log(action.payload);

        state = Object.assign({},state, {loading: false}, {users: action.payload});
        //console.log(state);
        return state;

    case usersActions.FETCH_USERS_ERROR:
        //console.log(action.payload);  //returns an error object such as {status: 400, message: "Invalid request"}
        state = Object.assign({},state, {loading: false}, {error: action.payload});
        //console.log(state);
        return state;

    default:
        return state;
  }
};

export default usersReducer;
