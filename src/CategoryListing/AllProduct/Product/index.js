import { View, Text,Image, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import styles from './style'

const Product = ({name,image,navigation}) => {
    const press =()=>{
        navigation.navigate('Detail Product');
    }
    return (
        <TouchableOpacity onPress={press} style={styles.container}>
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
        </TouchableOpacity>
    )
}

export default Product