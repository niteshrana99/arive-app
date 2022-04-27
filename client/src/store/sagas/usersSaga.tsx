import { AnyAction } from 'redux';
import { put, takeEvery, fork, all } from 'redux-saga/effects';
import { addNewUserSuccess, userDataSuccess } from '../actions/users.actions';

export function* getUserData() {
  const url = 'http://localhost:3001/users';
  let response: Response = yield fetch(url);
  response = yield response.json();
  if (response) {
    yield put(userDataSuccess(response));
  } else {
    // if(window.process.env.ENV_TYPE)
  }
}

export function* addNewUser(action: AnyAction) {
  const url = 'http://localhost:3001/users';
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(action.payload)
  }
  let response: Response = yield fetch(url, requestOptions);
  response = yield response.json();
  console.log(response)
  if(response) {
    yield put(addNewUserSuccess(response));
  }
}

export function* watchGetUserData() {
  yield takeEvery('REQUEST_USER_DATA', getUserData);

}

export function* watchPostUserSaga() {
  yield takeEvery('ADD_NEW_USER', addNewUser);
}

export function* userSaga() {
  yield all([fork(watchGetUserData), fork(watchPostUserSaga)]);
}

export default userSaga;
