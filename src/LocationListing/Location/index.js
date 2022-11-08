import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import Hr from '../../components/Hr';
import { DataContext } from '../../Screens';

const Location = ({ longitude,latitude,color,onDelete,onEdit,onClick}) => {


    return (
        <View>
            <TouchableOpacity onPress={onClick} style={styles.container}>
                <Icon style={styles.icon} name={'send'} size={30}/>
                <View style={styles.task}>
                    <Text >Latitude: {latitude}</Text>
                    <Text >Longitude: {longitude}</Text>
                </View>
                <View style={styles.right}>
                    <TouchableOpacity onPress={onEdit} style={styles.edit}>
                            <Icon style={styles.more} name='pencil' color={color}  size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.delete} onPress={onDelete}>
                            <Icon style={styles.more} name='trash' color={color}  size={30}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            <Hr/>

        </View>
    )
}

export default Location;