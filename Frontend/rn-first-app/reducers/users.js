import { combineReducers } from "redux";

import * as types from "../types/users";

const user = (state = null, action) => {
  switch (action.type) {
    case types.ADD_USER_STARTED:
      return action.payload.user;
    case types.ADD_USER_COMPLETED:
      return null;
    case types.ADD_USER_FAILED:
      return state;
    default:
      return state;
  }
};

const usersList = (state = [], action) => {
  switch (action.type) {
    case types.LOADING_USERS_STARTED:
      return [...state];
    case types.LOADING_USERS_COMPLETED:
      return [...state, action.users];
    case types.LOADING_USERS_FAILED:
      return [...state];
    case types.ADD_USER_COMPLETED:
      return [...state, action.payload.user];
    case types.REMOVE_USER_STARTED:
      const usersCopy = [...state];
      usersCopy.splice(action.payload.index, 1);
      return usersCopy;
    default:
      return state;
  }
};

const users = combineReducers({
  user,
  usersList,
});

export default users;

export const getUser = (state) => state?.user;
export const getUsersList = (state) => state?.usersList;
export const getUserFromList = (state, index) => state?.usersList[index];
