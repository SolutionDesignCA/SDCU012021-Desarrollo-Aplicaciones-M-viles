import * as types from "../types/auth";

export const startLogin = (usuario, contrasenia) => ({
  type: types.AUTHENTICATION_STARTED,
  payload: { usuario, contrasenia },
});

export const completeLogin = (token) => ({
  type: types.AUTHENTICATION_COMPLETED,
  payload: { token },
});

export const failLogin = (error) => ({
  type: types.AUTHENTICATION_FAILED,
  payload: { error },
});

export const logout = () => ({
  type: types.AUTHENTICATION_IDENTITY_CLEARED,
});
