/**
 * Created by luch on 10/28/16.
 */
import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginScreen from '../Containers/LoginScreen'
import MovieList from '../Containers/MovieList'
import Home from '../Containers/Home'

class NavigationRouter extends Component {
    render () {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='login' component={LoginScreen} title="Login" />
                    <Scene key='home' component={Home} title="Home" initial />
                    <Scene key='list' component={MovieList} title="Movies" />
                </Scene>
            </Router>
        )
    }
}

export default NavigationRouter
