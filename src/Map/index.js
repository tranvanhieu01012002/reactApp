import React from "react";
import {TextInput, View,Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import styles from "./style";

function Map({navigation }) {

    const [marks,setMarks] = useState([ {
        latitude: 16.0597983,
        longitude: 108.2434979,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    },
    {
        latitude: 16.0697983,
        longitude: 108.2434979,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }]);

    const region = {
        latitude: 16.0597983,
        longitude: 108.2434979,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    const addMark = (e)=>{
    //    setMarks([...marks,{
    //     latitude: e.nativeEvent.coordinate.latitude,
    //     longitude: e.nativeEvent.coordinate.longitude,
    //     latitudeDelta: 0.01,
    //     longitudeDelta: 0.01,
    //    }])
    navigation.navigate('location', {
        itemId: 86,
        otherParam: 'anything you want here',
      });
    }
    return (
        <View style={styles.container}>
            <MapView
                zoomEnabled={true}
                zoomControlEnabled={true}
                style={styles.map}
                initialRegion={region}
                onPress={addMark}
                >
               {marks.map((item,i)=>(
                <Marker key={i} coordinate={item}/>
               ))}
            </MapView>
            <TextInput style={styles.input}/>
        </View>        
    );
}

export default Map;