/**
 * Created by luch on 10/28/16.
 */
import React from 'react'
import { Platform, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'

class Home extends React.Component {
    render () {

        let txt = this.props.movies.length > 0 ? this.props.movies[0].title : "111"
        return (
            <View style={{flex:1, marginTop:64}}>
                    <TouchableOpacity style={{width:200, height:50}} onPress={NavigationActions.list} >
                        <Text> {txt} </Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Home)
