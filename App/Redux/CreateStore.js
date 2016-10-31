/**
 * Created by luch on 10/28/16.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import RehydrationServices from '../Services/RehydrationServices'
import ReduxPersist from '../Config/ReduxPersist'

// creates the store
export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = []
    const enhancers = []

    /* ------------- Saga Middleware ------------- */

    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)

    /* ------------- Logger Middleware ------------- */

    const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']
    if (__DEV__) {
        // the logger master switch
        // create the logger
        const logger = createLogger({
            predicate: (getState, { type }) => __DEV__ && SAGA_LOGGING_BLACKLIST.indexOf(type) < 0
        })
        middleware.push(logger)
    }

    /* ------------- Reactotron Enhancer ------------- */

    // in dev, let's bring **START** with Reactotron's store enhancer
    if (__DEV__) {
        // only bring in Reactotron in dev mode
        const createReactotronEnhancer = require('reactotron-redux')
        // const Reactotron = require('reactotron-react-native').default

        // create it
        const reactotronEnhancer = createReactotronEnhancer(console.tron, {
            isActionImportant: action => action.type === "MOVIE_REQUEST",
            except: [...SAGA_LOGGING_BLACKLIST]
        })

        enhancers.push(reactotronEnhancer)
    }

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware))

    /* ------------- AutoRehydrate Enhancer ------------- */

    // add the autoRehydrate enhancer
    if (ReduxPersist.active) {
        enhancers.push(autoRehydrate())
    }

    const store = createStore(rootReducer, compose(...enhancers))

    // configure persistStore and check reducer version number
    if (ReduxPersist.active) {
        RehydrationServices.updateReducers(store)
    }

    // kick off root saga
    sagaMiddleware.run(rootSaga)

    return store
}
