import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Back from './Back';
import Banner from './Banner';
import TopProduct from './TopProduct';
import styles from './style';
import AllProduct from './AllProduct';

const CategoryListing = () => {
    return (
        <ScrollView style={styles.container}>
            {/* <Back/> */}
            <Banner/>
            <TopProduct/>
            <AllProduct/>
        </ScrollView>
    )
}

export default CategoryListing;