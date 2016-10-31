/**
 * Created by luch on 10/31/16.
 */

import ReduxPersist from '../Config/ReduxPersist'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
// import StartupActions from '../Redux/StartupRedux'

const updateReducers = (store) => {
    const reducerVersion = ReduxPersist.reducerVersion
    const config = ReduxPersist.storeConfig
    // const startup = () => store.dispatch(StartupActions.startup())

    // Check to ensure latest reducer version
    AsyncStorage.getItem('reducerVersion').then((localVersion) => {
        if (localVersion !== reducerVersion) {
            console.tron.display({
                name: 'PURGE',
                value: {
                    'Old Version:': localVersion,
                    'New Version:': reducerVersion
                },
                preview: 'Reducer Version Change Detected',
                important: true
            })
            // Purge store
            // persistStore(store, config, startup).purge()
            persistStore(store, config, () => {
                console.log("restored")
            }).purge()
            AsyncStorage.setItem('reducerVersion', reducerVersion)
        } else {
            // persistStore(store, config, startup)
            persistStore(store, config, () => {
                console.log("restored")
            })
        }
    }).catch(() => {
        // persistStore(store, config, startup)
        console.log(store)
        persistStore(store, config)
        AsyncStorage.setItem('reducerVersion', reducerVersion)
    })
}

export default {updateReducers}
