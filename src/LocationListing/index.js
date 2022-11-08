import { View, Text,Button, Alert } from 'react-native';
import Location from './Location';
import React, { useContext } from 'react'
import { DataContext } from '../Screens';

const LocationListing = ({navigation}) => {
    const {locations,setLocations} = useContext(DataContext);

    const onDelete = (i)=>{
        locations.splice(i,1);
        setLocations([...locations]);
    }
    
    const onEdit = ()=>{
        Alert.alert("you want to deleted?")
    }

    const onClick = (i)=>{
       navigation.navigate('Google Map',{id:i})
    }

    return (
        <View>
            {
            locations.length != 0 ?
            locations.map((item,i)=>(
                <Location onClick={()=>onClick(i)}  onEdit={onEdit} onDelete={()=>onDelete(i)} color={'#0444'} index={i} key={i} longitude={item.longitude} latitude={item.latitude} icon={'send'} task='hihi'/>
            ))
            :<Text>No location</Text>
            }
            <Button title="Go to Map" onPress={() => navigation.navigate('Google Map')} />
        </View>
    )
}

export default LocationListing;