import * as types from "../types/users";

export const startModifyUser = (user) => ({
  type: types.MODIFY_USER,
  payload: { user },
});

export const updateUser = (user) => ({
  type: types.START_MODIFYING_ALL_USERS,
  payload: { user },
});

export const startLoadingUsers = () => ({
  type: types.LOADING_USERS_STARTED,
});

export const completeLoadingUsers = (users) => ({
  type: types.LOADING_USERS_COMPLETED,
  payload: { users },
});

export const failLodingUsers = (error) => ({
  type: types.LOADING_USERS_FAILED,
  payload: { error },
});

export const startAddingUser = (user) => ({
  type: types.ADD_USER_STARTED,
  payload: { user },
});

export const completeAddingUser = (user) => ({
  type: types.ADD_USER_COMPLETED,
  payload: { user },
});

export const failAddingUser = (error) => ({
  type: types.ADD_USER_FAILED,
  payload: { error },
});

export const startRemovingUser = (index) => ({
  type: types.REMOVE_USER_STARTED,
  payload: { index },
});

export const completeRemovingUser = (user) => ({
  type: types.REMOVE_USER_COMPLETED,
  payload: { user },
});

export const failRemovingUser = (error) => ({
  type: types.REMOVE_USER_FAILED,
  payload: { error },
});
