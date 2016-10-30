/**
 * Created by canice on 29/10/16.
 */
import { call, put } from 'redux-saga/effects'
// import movieAction from '../Redux/MovieAction'

const API_ENDPOINT = `https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json`;

const fetchMovies = () => {
    return fetch(API_ENDPOINT).then(function (response) {
        return response.json().then(function (json) {
            return json.movies
        })
    })
};

export default function * movieRequest() {
    const movies = yield fetchMovies();
    console.log(movies)
    yield put({type: 'FETCH_SUCCEEDED', movies})

}

