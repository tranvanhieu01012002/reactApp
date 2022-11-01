import { View, Text, FlatList } from 'react-native'
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

const TopProduct = ({navigation}) => {
    const renderItem = ({item})=>(
        <Product navigation={navigation} name={item.name} image={item.image}/>
    )
    return (
        <View>
            <Text>Top product</Text>
            <FlatList
                
                nestedScrollEnabled
                style={styles.flatList}
                data={data}
                key={'_'}
                renderItem={renderItem}
                keyExtractor={item => "_" + item.id}
                horizontal={true}
            />
        </View>
    )
}

export default TopProduct;