import React, { useContext } from "react";
import {TextInput, View,Text, Alert, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import styles from "./style";
import { DataContext } from "../Screens";

function Map({navigation }) {
    const {locations,setLocations} = useContext(DataContext)

    const region = {
        latitude: 16.0597983,
        longitude: 108.2434979,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    const confirmDiaLog = (e)=>{
        const setMark1 = (e)=>{
            // setMarks([...marks,{
            //     latitude: e.nativeEvent.coordinate.latitude,
            //     longitude: e.nativeEvent.coordinate.longitude,
            //     latitudeDelta: 0.01,
            //     longitudeDelta: 0.01,
            // }])
        }
        return Alert.alert(
            "Are your sure?",
            "Are you sure you want to remove this beautiful box?",
            [
                // The "Yes" button
                {
                  text: "Yes",
                  onPress: ()=>setMark1(e),
                },
                {
                  text: "No",
                  onPress: () => {
                    console.log("fail");
                   },
                },
              ]
        )
    }
    const addMark = (e)=>{
        setLocations([...locations,{
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
           }])
    //    setMarks([...marks,{
    //     latitude: e.nativeEvent.coordinate.latitude,
    //     longitude: e.nativeEvent.coordinate.longitude,
    //     latitudeDelta: 0.01,
    //     longitudeDelta: 0.01,
    //    }])
    // console.log(e);
        // confirmDiaLog(e)
    // navigation.navigate('location', {
    //     itemId: 86,
    //     otherParam: 'anything you want here',
    //   });
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
               {locations.map((item,i)=>(
                <Marker key={i} coordinate={item}/>
               ))}
            </MapView>
            <Button title="view product"/>
        </View>        
    );
}

export default Map;