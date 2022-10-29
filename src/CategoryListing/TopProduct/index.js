import { View, Text } from 'react-native'
import React from 'react'
import Product from './Product';

const TopProduct = () => {
    return (
        <View>
            <Text>Top product</Text>
            <Product/>
        </View>
    )
}

export default TopProduct;