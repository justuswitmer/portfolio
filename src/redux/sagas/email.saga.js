import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* sendMessage(action) {
  console.log('in sendMessage Saga with action.payload:', action.payload);
  yield axios({
    method: 'POST',
    url: action.url,
    data: action.payload
  });
}

function* emailSaga() {
  yield takeLatest('SEND_MESSAGE', sendMessage);
}

export default emailSaga;