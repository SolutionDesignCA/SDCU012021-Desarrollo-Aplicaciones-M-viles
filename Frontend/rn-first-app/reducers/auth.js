import jwtDecode from "jwt-decode";
import { combineReducers } from "redux";

import * as types from "../types/auth";

const token = (state = null, action) => {
  switch (action.type) {
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return action.payload.token;
    }
    case types.AUTHENTICATION_FAILED: {
      return null;
    }
    case types.AUTHENTICATION_IDENTITY_CLEARED: {
      return null;
    }
    default:
      return state;
  }
};

const decoded = (state = null, action) => {
  switch (action.type) {
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return action.payload.token ? jwtDecode(action.payload.token) : null;
    }
    case types.TOKEN_REFRESH_COMPLETED: {
      return jwtDecode(action.payload.newToken);
    }
    case types.AUTHENTICATION_FAILED: {
      return null;
    }
    case types.AUTHENTICATION_IDENTITY_CLEARED: {
      return null;
    }
    default:
      return state;
  }
};

const isAuthenticating = (state = true, action) => {
  switch (action.type) {
    // case types.AUTHENTICATION_STARTED: {
    //   return true;
    // }
    case types.AUTHENTICATION_COMPLETED: {
      return false;
    }
    case types.AUTHENTICATION_FAILED: {
      return false;
    }
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return null;
    }
    case types.AUTHENTICATION_FAILED: {
      return action.payload.error;
    }
    default:
      return state;
  }
};

const auth = combineReducers({
  token,
  decoded,
  isAuthenticating,
  error,
});

export default auth;

export const getAuthToken = (state) => state.token;
export const isAuthenticated = (state) => (state.token ? true : false);
export const getIsAuthenticating = (state) => state.isAuthenticating;
export const getAuthenticatingError = (state) => state.error;
export const getAuthUser = (state) => state?.decoded;
