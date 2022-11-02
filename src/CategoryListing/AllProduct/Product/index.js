import { View, Text,Image, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome';

const Product = ({name,image,navigation}) => {
    const press =()=>{
        navigation.navigate('Detail Product');
    }
    return (
        <TouchableOpacity onPress={press} style={styles.container}>
            <Image 
                source={image}
                style={styles.image}
                />
            <View
                style={styles.textAre}
            >
                <Text
                    style={styles.text}
                >
                    {name}
                </Text>
            </View>
            <View >
                <Text>
                    Accu-check Active Test Strip
                </Text>
                <View style={styles.info}>
                    <Text>$20</Text>
                    <Text style={styles.rate}><Icon color={'#fff'} name="star"/> 4.2</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Product