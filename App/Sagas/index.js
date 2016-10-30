/**
 * Created by luch on 10/28/16.
 */

import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import movieRequest from './MovieSagas'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loginRequest(action) {
    try {
        // const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({type: "LOGIN_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "LOGIN_FAILED", message: e.message});
    }
}

// /*
//  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//  Allows concurrent fetches of user.
//  */
// function* mySaga() {
//     yield* takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
function* mySaga() {
    yield [
        takeLatest("LOGIN_REQUEST", loginRequest),
        takeLatest("MOVIE_REQUEST", movieRequest),
    ]
}

export default mySaga;