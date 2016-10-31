/**
 * Created by canice on 29/10/16.
 */
import { call, put } from 'redux-saga/effects'
// import { delay } from 'redux-saga'

export default function * movieRequest(api) {
    try {
        const {ok, data, status, problem} = yield call(api.get, 'facebook/react-native/master/docs/MoviesExample.json')
        if (ok) {
            let movies = data.movies
            yield put({type: 'FETCH_SUCCEEDED', movies})
        } else {
            console.log(status, problem)
        }
    } catch (e) {
        console.log(e.message)
        console.log(e)
    }
}

