import { View } from 'react-native'
import React from 'react'
import CategoryListing from '../CategoryListing'
import styles from './style'

const Screens = () => {
    return (
        <View style={styles.container}>
            <CategoryListing/>
        </View>
    )
}

export default Screens