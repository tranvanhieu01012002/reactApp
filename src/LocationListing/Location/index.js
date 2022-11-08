import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import Hr from '../../components/Hr';

const Location = ({ longitude,latitude,color,index}) => {
    const deleteLocation = ()=>{
        Alert.alert(index+"");
    }
    return (
        <View>
            <View style={styles.container}>
                <Icon style={styles.icon} name={'send'} size={30}/>
                <View style={styles.task}>
                    <Text >Latitude: {latitude}</Text>
                    <Text >Longitude: {longitude}</Text>
                </View>
                <TouchableOpacity onPress={deleteLocation}>
                    <Icon style={styles.more} name='trash' color={color}  size={30}/>
                </TouchableOpacity>
            </View>

            <Hr/>

        </View>
    )
}

export default Location;