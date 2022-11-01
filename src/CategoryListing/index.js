import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Back from './Back';
import Banner from './Banner';
import TopProduct from './TopProduct';
import styles from './style';
import AllProduct from './AllProduct';
import { NavigateProvider } from './NavigateContext';

const CategoryListing = ({navigation}) => {
    return (
       <NavigateProvider navigation={navigation}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} 
                horizontal={false} 
                style={styles.container}
            >
                <Banner/>
                <TopProduct navigation={navigation}/>
                <AllProduct navigation={navigation}/>
            </ScrollView>
       </NavigateProvider>
    )
}

export default CategoryListing;