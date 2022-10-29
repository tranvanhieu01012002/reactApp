import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'

const Banner = () => {
    const img = require('../../assets/img/26363.jpg')
    return (
        <ImageBackground
            source={img}
            resizeMode="cover" 
            style={styles.image}
        >
            {/* <Text style={styles.text}>Inside</Text> */}
        </ImageBackground>
    )
}

export default Banner