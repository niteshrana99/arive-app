import { fork, all } from 'redux-saga/effects';
import usersSaga from './usersSaga';
import hobbiesSaga from './hobbies.saga';

export default function* rootSaga() {
    yield all([
        fork(usersSaga),
        fork(hobbiesSaga)
    ])
}