/**
 * Created by luch on 10/28/16.
 */

import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import movieRequest from './MovieSagas'
import Reactotron from 'reactotron-react-native'
import ApiSauce from 'apisauce'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loginRequest(action) {
    try {
        // const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({type: "LOGIN_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "LOGIN_FAILED", message: e.message});
    }
}


const api = ApiSauce.create({
    baseURL: 'https://raw.githubusercontent.com/'
})

api.addMonitor(Reactotron.apisauce)

function* mySaga() {
    yield [
        takeLatest("LOGIN_REQUEST", loginRequest),
        takeLatest("MOVIE_REQUEST", movieRequest, api),
    ]
}

export default mySaga;