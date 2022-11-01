import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './style'
import Price from '../../components/Price'
import AddToCart from './AddToCart'
import Hr from '../../components/Hr'

const Product = () => {
    const img = require('../../assets/img/image19.png')
    return (
        <View>
            <Text style={styles.h1}>Sugar Free Gold Low Calories</Text>
            <Text>Etiam mollis metus non purus </Text>
            <View style={styles.containerImage}>
                <Image
                    source={img}
                />
            </View>
            <View style={styles.bottomProduct}>
                <Price/>
                <AddToCart/>
            </View>
            <Hr/>
        </View>
    )
}

export default Product