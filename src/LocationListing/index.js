import { View, Text,Button } from 'react-native';
import Location from './Location';
import React, { useContext } from 'react'
import { DataContext } from '../Screens';

const LocationListing = ({navigation}) => {
    const {locations} = useContext(DataContext);
    return (
        <View>
            {locations.map((item,i)=>(
                <Location color={'#0444'} index={i} key={i} longitude={item.longitude} latitude={item.latitude} icon={'send'} task='hihi'/>
            ))}
            <Button title="Go to Map" onPress={() => navigation.navigate('Google Map')} />
        </View>
    )
}

export default LocationListing;