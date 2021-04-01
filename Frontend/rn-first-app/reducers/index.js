import { combineReducers } from "redux";
import auth, * as authSelectors from "./auth";

const reducer = combineReducers({
  auth,
});

export default reducer;

// Auth Selectors
export const getAuthToken = (state) => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = (state) =>
  authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = (state) =>
  authSelectors.getAuthenticatingError(state.auth);
// ! TODO: Decoded Selectors
