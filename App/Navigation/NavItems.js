/**
 * Created by canice on 29/10/16.
 */
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../Themes'

// const openDrawer = () => {
//     NavigationActions.refresh({
//         key: 'drawer',
//         open: true
//     })
// }

export default {
    backButton () {
        return (
            <TouchableOpacity onPress={NavigationActions.pop}>
                Back
            </TouchableOpacity>
        )
    },

    // hamburgerButton () {
    //     return (
    //         <TouchableOpacity onPress={openDrawer}>
    //             <Icon name='bars'
    //                   size={Metrics.icons.medium}
    //                   color={Colors.snow}
    //                   style={styles.navButtonLeft}
    //             />
    //         </TouchableOpacity>
    //     )
    // }

}
