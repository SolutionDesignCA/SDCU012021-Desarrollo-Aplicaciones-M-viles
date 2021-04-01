import { call, takeEvery, put, select } from "redux-saga/effects";

import { API_BASE_URL } from "../settings";

import * as selectors from "../reducers";
import * as authActions from "../actions/auth";
import * as types from "../types/auth";

function* login(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const { data } = yield response.json();
      yield put(authActions.completeLogin(data));
    } else {
      const { non_field_errors } = yield response.json();
      yield put(authActions.failLogin(non_field_errors[0]));
    }
  } catch (e) {
    console.log(e);
    yield put(authActions.failLogin("Falló horrible la conexión mano"));
  }
}

export function* watchLoginStarted() {
  yield takeEvery(types.AUTHENTICATION_STARTED, login);
}
