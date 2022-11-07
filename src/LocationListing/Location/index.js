import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import Hr from '../../components/Hr';

const Location = ({icon,task}) => {
  return (
    <View>
        <View style={styles.container}>
        <Icon style={styles.icon} name={icon} size={30}/>
        <Text style={styles.task}>{task}</Text>
        <Icon style={styles.more} name='angle-right' size={30}/>
    </View>
    <Hr/>
    </View>
  )
}

export default Location;