import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Back from './Back';
import Banner from './Banner';
import TopProduct from './TopProduct';

const CategoryListing = () => {
    return (
        <View>
            <Back/>
            <Banner/>
            <TopProduct/>
        </View>
    )
}

export default CategoryListing;