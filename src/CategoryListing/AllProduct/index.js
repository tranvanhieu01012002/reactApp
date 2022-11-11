import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Product from './Product';
import styles from './style';

const AllProduct = ({navigation,products}) => {
    const renderItem = ({item})=>{
        console.log(item);
        return (
            <View>
                <Product navigation={navigation} name={item.name} image={item.image}/>
            </View>
        )
    }
    return (
        <View>
            <Text>All product</Text>
            <FlatList
                columnWrapperStyle={{justifyContent: 'space-between'}}
                nestedScrollEnabled
                key={'_'}
                style={styles.flatList}
                data={products}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => "_" + item.id}
            />
        </View>
    )
}

export default AllProduct;