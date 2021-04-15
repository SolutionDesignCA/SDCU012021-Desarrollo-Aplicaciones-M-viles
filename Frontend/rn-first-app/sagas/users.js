import { call, takeEvery, put, select } from "redux-saga/effects";

import { API_BASE_URL } from "../settings";

import * as actions from "../actions/users";
import * as types from "../types/users";
import * as selectors from "../reducers";

function* loadUsersList(action) {
  try {
    const isAuth = yield select(selectors.isAuthenticated);

    if (isAuth) {
      const token = yield select(selectors.getAuthToken);

      const response = yield call(fetch, `${API_BASE_URL}/usuarios`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token,
        },
      });

      if (response.status === 200) {
        const { data } = yield response.json();
        // console.log("SAGAAAAA", data);
        yield put(actions.completeLoadingUsers(data));
      } else {
        const { error } = yield response.json();
        yield put(actions.failLodingUsers(error));
      }
    }
  } catch (e) {
    yield put(actions.failLodingUsers("Fallo la conexion."));
  }
}

export function* watchLoadUsersList() {
  yield takeEvery(types.LOADING_USERS_STARTED, loadUsersList);
}

function* modifyUsersList(action) {
  try {
    const isAuth = yield select(selectors.isAuthenticated);

    if (isAuth) {
      const token = yield select(selectors.getAuthToken);

      const response = yield call(
        fetch,
        `${API_BASE_URL}/usuarios/${action.payload.user.codigo_usuario}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            usuario: action.payload.user,
          }),
          headers: {
            "Content-Type": "application/json",
            token,
          },
        }
      );

      if (response.status === 200) {
        const { data } = yield response.json();
        // console.log("SAGAAAAA", data);
        yield put(actions.completeLoadingUsers(data));
      } else {
        const { error } = yield response.json();
        yield put(actions.failLodingUsers(error));
      }
    }
  } catch (e) {}
}

export function* watchModifyUsersList() {
  yield takeEvery(types.START_MODIFYING_ALL_USERS, modifyUsersList);
}
