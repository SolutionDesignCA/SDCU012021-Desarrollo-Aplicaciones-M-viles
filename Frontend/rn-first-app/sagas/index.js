import { fork, all } from "redux-saga/effects";
import { watchLoginStarted } from "./auth";
import { watchLoadUsersList, watchModifyUsersList } from "./users";

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchLoadUsersList),
    fork(watchModifyUsersList),
  ]);
}

export default mainSaga;
