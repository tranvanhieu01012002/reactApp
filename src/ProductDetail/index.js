import { View, Text } from 'react-native'
import React from 'react'
import Product from './Product';
import styles from './style';

const ProductDetail = () => {
    return (
        <View style={styles.container}>
            <Text>ProductDetail</Text>
            <Product/>
        </View>
    )
}

export default ProductDetail;