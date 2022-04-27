import { AnyAction } from 'redux';
import { put, takeEvery, fork, all } from 'redux-saga/effects';
import { deleteUserHobbySuccess, getUserHobbiesSuccess, userDataSuccess } from '../actions/users.actions';

export function* getUserData() {
  const url = 'http://localhost:3001/users';
  let response: Response = yield fetch(url);
  response = yield response.json();
  if (response && Array.isArray(response)) {
    yield put(userDataSuccess(response));
  } else {
    // if(window.process.env.ENV_TYPE)
  }
}

export function* getuseHobbies(action: AnyAction) {
  const userId = action.payload;
  const url = `http://localhost:3001/hobbies?id=${userId}`;
  let response: Response = yield fetch(url);
  response = yield response.json();
  if(response) {
    yield put(getUserHobbiesSuccess(response));
  }
}

export function* addNewHobby(action: AnyAction) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({...action.payload})
  }
  const userId = action.payload.userId;
  const url = `http://localhost:3001/hobbies?id=${userId}`;
  let response: Response = yield fetch(url, requestOptions);
  response = yield response.json();
  if(response) {
    yield put(getUserHobbiesSuccess(response));
  }
}

export function* deleteUserhobbies(action: AnyAction) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({id: action.payload.id})
  }
  const userId = action.payload.userId;
  const url = `http://localhost:3001/hobbies?id=${userId}`;
  let response: Response = yield fetch(url, requestOptions);
  response = yield response.json();
  if(response) {
    yield put(deleteUserHobbySuccess(response));
  }
}

export function* watchDeleteHobbies() {
  yield takeEvery('DELETE_USER_HOBBY', deleteUserhobbies)
}

export function* watchGetHobbiesData() {
  yield takeEvery('REQUEST_USER_HOBBIES', getuseHobbies);
}

export function* watchAddNewHobby() {
  yield takeEvery('ADD_NEW_HOBBY', addNewHobby);
}
export function* userSaga() {
  yield all([fork(watchGetHobbiesData), fork(watchAddNewHobby), fork(watchDeleteHobbies)]);
}

export default userSaga;
