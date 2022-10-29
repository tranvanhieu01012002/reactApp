import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const AddToCart = () => {
    return (
        <View style={styles.container}>
            <Icon 
                style={styles.icon} 
                name="cart-plus" 
                color={"#000"} 
                size={30} />
            <Text>Add to cart</Text>
        </View>
    )
}

export default AddToCart;