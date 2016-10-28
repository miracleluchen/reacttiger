/**
 * Created by luch on 10/28/16.
 */
import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
// import LoginScreen from '../Containers/LoginScreen'
import Home from '../Containers/Home'

class NavigationRouter extends Component {
    render () {
        return (
            <Router>
                <Scene key='root'>
                    {/*<Scene key='login' component={LoginScreen} title="login" />*/}
                    <Scene key='home' component={Home} title="home" initial={true}/>

                </Scene>
            </Router>
        )
    }
}

export default NavigationRouter
