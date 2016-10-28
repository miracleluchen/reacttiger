/**
 * Created by luch on 10/28/16.
 */
import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
// import StartupActions from '../Redux/StartupRedux'
// import ReduxPersist from '../Config/ReduxPersist'

class RootContainer extends Component {
    componentDidMount () {
        // if redux persist is not active fire startup action
        // if (!ReduxPersist.active) {
        //     this.props.startup()
        // }
    }

    render () {
        return (
            <View>
                <StatusBar barStyle='light-content' />
                <NavigationRouter />
            </View>
        )
    }
}

const mapStateToDispatch = dispatch => ({
    // startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapStateToDispatch)(RootContainer)