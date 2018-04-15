//Users creators
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';



//Users Actions
export const fetchUsersAction = () => ({ type: FETCH_USERS});
export const fetchUsersSuccessAction = payload => ({ type: FETCH_USERS_SUCCESS, payload });
export const fetchUsersErrorAction = payload => ({ type: FETCH_USERS_ERROR, payload });