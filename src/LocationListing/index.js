import { View, Text,Button } from 'react-native';
import Location from './Location';
import React from 'react'

const LocationListing = ({route,navigation}) => {
    // const { itemId, otherParam } = route.params;
    const itemId = 'ff';
    return (
        <View>
            <Location icon='send' task={'Location 1'}/>
            <Text>{itemId}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default LocationListing;