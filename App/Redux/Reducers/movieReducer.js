/**
 * Created by canice on 29/10/16.
 */
import { Map } from 'immutable'

const INITIAL_STATE = Map({
    movies: null,
    fetching: null,
    error: null,
})

export default function movieReducer(movies = [], action) {
    switch (action.type) {
        case "FETCH_REQUEST":
            return movies
        case "FETCH_SUCCEEDED":
            return [...action.movies]
        case "FETCH_FAILED":
            return movies
        default:
            return movies

    }
}