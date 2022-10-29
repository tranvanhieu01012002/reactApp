import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './style'

const Product = ({name,image}) => {
   
    return (
        <View style={styles.container}>
            <Image 
                source={image}
                style={styles.image}
                />
            <View
                style={styles.textAre}
            >
                <Text
                    style={styles.text}
                >
                    {name}
                </Text>
            </View>
        </View>
    )
}

export default Product