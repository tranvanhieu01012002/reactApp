import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Product from './Product';
import styles from './style';

const TopProduct = ({navigation,products}) => {
    const renderItem = ({item})=>(
        <Product navigation={navigation} name={item.name} image={item.image}/>
    )
    return (
        <View>
            <Text>Diabetic Diet</Text>
            <FlatList 
                nestedScrollEnabled
                style={styles.flatList}
                data={products}
                key={'_'}
                renderItem={renderItem}
                keyExtractor={item => "_" + item.id}
                horizontal={true}
            />
        </View>
    )
}

export default TopProduct;