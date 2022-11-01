import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './style'

const User = () => {
    const img = require('../../assets/img/avata.jpg')
  return (
    <View style={styles.user}>
        <Image style={styles.image}
            source={img}
        />
        <View>
            <Text>
            Hi, mr Hieu Pro
            </Text>
            <Text>
                Welcome to the store
            </Text>
        </View>
    </View>
  )
}

export default User