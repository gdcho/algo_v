import { all } from 'redux-saga/effects';
import { watchStartSorting } from './sortingSaga';

export default function* rootSaga() {
  yield all([
    watchStartSorting(),
  ]);
}
