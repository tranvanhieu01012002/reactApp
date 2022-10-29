import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Product from './Product';
import styles from './style';

const data = [
    {
        id:1,
        image:require('../../assets/img/image133.png'),
        name:'product1'
    },
    {
        id:2,
        image:require('../../assets/img/image133.png'),
        name:'product2'
    },
    {
        id:3,
        image:require('../../assets/img/image133.png'),
        name:'product3'
    },
    {
        id:4,
        image:require('../../assets/img/image133.png'),
        name:'product4'
    },
]

const AllProduct = () => {
    const renderItem = ({item})=>(
        <View>
            <Product name={item.name} image={item.image}/>
        </View>
    )
    return (
        <View>
            <Text>Top product</Text>
            <FlatList
                nestedScrollEnabled
                key={'_'}
                style={styles.flatList}
                data={data}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => "_" + item.id}
            />
        </View>
    )
}

export default AllProduct;