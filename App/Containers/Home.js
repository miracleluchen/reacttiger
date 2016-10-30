/**
 * Created by luch on 10/28/16.
 */
import React from 'react'
import { Platform, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/HomeStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Home extends React.Component {
    render () {
        return (
            <View style={{flex:1, marginTop:64}}>
                    <TouchableOpacity style={{width:200, height:50}} onPress={NavigationActions.list} >
                        <Text>Component Examples Screen</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

