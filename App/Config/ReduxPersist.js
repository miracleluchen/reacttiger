/**
 * Created by luch on 10/31/16.
 */

import immutableTransform from 'redux-persist-transform-immutable'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
    active: true,
    reducerVersion: '1',
    storeConfig: {
        storage: AsyncStorage,
        blacklist: ['login'], // reducer keys that you do NOT want stored to persistence here
        // whitelist: [], Optionally, just specify the keys you DO want stored to
        // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
        // transforms: [immutableTransform]
    }
}

export default REDUX_PERSIST