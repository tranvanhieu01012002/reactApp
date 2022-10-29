import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';


const Back = () => {
    return (
        <View style={styles.container}>
            <Icon  name="arrow-left" color={"#000"} size={30} />
            <Text >index</Text>
        </View>
    )
};

export default Back;