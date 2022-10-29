import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './style'

const Product = () => {
    const img = require('../../../assets/img/image133.png')
    return (
        <View style={styles.container}>
            <Image 
                source={img}
                style={styles.image}
                />
            <View
                style={styles.textAre}
            >
                <Text
                    style={styles.text}
                >
                    Product
                </Text>
            </View>
        </View>
    )
}

export default Product