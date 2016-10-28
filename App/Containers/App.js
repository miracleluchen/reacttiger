/**
 * Created by luch on 10/28/16.
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
// import applyConfigSettings from '../Config'

// Apply config overrides
// applyConfigSettings()

// create our store
const store = createStore()

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        )
    }
}

export default App