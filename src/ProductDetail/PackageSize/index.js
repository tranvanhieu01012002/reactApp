import { View, Text } from 'react-native'
import React from 'react'
import Price from '../../components/Price';

const PackageSize = () => {
    return (
        <View>
            <Text>Package Size</Text>
            <Price/>
        </View>
    )
}

export default PackageSize;