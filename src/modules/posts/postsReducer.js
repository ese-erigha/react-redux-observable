import * as postsActions from './postsActions';
import initialState from '../../shared/models/initialState';


//Update the application state based on the given action.
const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case postsActions.FETCH_POSTS_PENDING:
        return { ...state, loading: true };
       
    case postsActions.FETCH_POSTS_SUCCESS:
        //console.log(action.payload);

        state = Object.assign({},state, {loading: false}, {posts: action.payload});
        //console.log(state);
        return state;

    case postsActions.FETCH_POSTS_ERROR:
        //console.log(action.payload);  //returns an error object such as {status: 400, message: "Invalid request"}
        state = Object.assign({},state, {loading: false}, {error: action.payload});
        //console.log(state);
        return state;

    default:
        return state;
  }
};

export default postsReducer;
