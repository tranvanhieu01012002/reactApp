import { View, FlatList } from 'react-native'
import React from 'react'
import User from './User'
import Task from './Task'
import styles from './style';

const data=[
    {
        id:'1',
        icon: 'facebook',
        task:'Private account'
    },
    {
        id:'2',
        icon: 'google',
        task:'Private account'
    },
    {
        id:'3',
        icon: 'home',
        task:'Private account'
    },
]
const Profile = () => {
    const renderItem = ({ item }) => (
        <Task icon={item.icon} task={item.task}/>
      );
    return (
        <View style={styles.container}>
            <User/>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Profile