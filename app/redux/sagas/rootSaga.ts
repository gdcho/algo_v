import { all } from "redux-saga/effects";
import { watchStartSorting, watchResetArray } from "./sortingSaga";

export default function* rootSaga() {
  yield all([watchStartSorting(), watchResetArray()]);
}
