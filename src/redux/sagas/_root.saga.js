import { all } from 'redux-saga/effects';
import emailSaga from './email.saga';

export default function* rootSaga() {
  yield all([
    emailSaga(),
  ]);
}
