//Users creators
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';



//Users Actions
export const fetchPostsAction = payload => ({ type: FETCH_POSTS,payload});
export const fetchPostsSuccessAction = payload => ({ type: FETCH_POSTS_SUCCESS, payload });
export const fetchPostsErrorAction = payload => ({ type: FETCH_POSTS_ERROR, payload });