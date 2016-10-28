/**
 * Created by luch on 10/28/16.
 */
import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import loginReducer from './Reducers/LoginReducer'

export default () => {
    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = combineReducers({
        login: loginReducer
    })

    return configureStore(rootReducer, rootSaga)
}
