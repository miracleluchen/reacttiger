/**
 * Created by canice on 29/10/16.
 */

import React from 'react'
import { Platform, View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as MovieAction from '../Redux/Actions/MovieAction'

// Styles
import styles from './Styles/MovieListStyle'

class MovieList extends React.Component {

    componentWillMount() {
        this.props.getMovies()

        const rowHasChanged = (r1, r2) => r1 !== r2

        // DataSource configured
        const ds = new ListView.DataSource({rowHasChanged})

        // Datasource is always in state
        this.state = {
            dataSource: ds.cloneWithRows(this.props.movies)
        }
    }

    renderRow (rowData) {
        return (
            <View style={styles.row}>
                <Text style={styles.boldLabel}>{rowData.id}</Text>
                <Text style={styles.label}>{rowData.title}</Text>
            </View>
        )
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.movies !== this.props.movies) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.movies)
            })
        }
    }
    
    render () {
        return (
            <View style={styles.mainContainer}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapActionCreatorsToProps = (dispatch) => {
    return bindActionCreators(MovieAction, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MovieList)
