import { combineReducers } from "redux";
import auth, * as authSelectors from "./auth";
import users, * as usersSelectors from "./users";

const reducer = combineReducers({
  auth,
  users,
});

export default reducer;

// Auth Selectors
export const getAuthToken = (state) => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = (state) =>
  authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = (state) =>
  authSelectors.getAuthenticatingError(state.auth);
export const getAuthUser = (state) => authSelectors.getAuthUser(state.auth);

// ! TODO: Decoded Selectors

// Users Selectors

export const getUser = (state) => usersSelectors.getUser(state.users);
export const getUsersList = (state) => usersSelectors.getUsersList(state.users);
export const getUserFromUsersList = (state) =>
  usersSelectors.getUserFromList(state.users, index);
