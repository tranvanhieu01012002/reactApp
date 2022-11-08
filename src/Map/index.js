import React, { useContext } from "react";
import {TextInput, View,Text, Alert, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import styles from "./style";
import { DataContext } from "../Screens";

function Map({route,navigation}) {
    const {locations,setLocations} = useContext(DataContext);
    const { id } = route.params ??  {id:-1};
    console.log(id);
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
                <Marker pinColor={i==id?'green':'red'} key={i} coordinate={item}/>
               ))}
            </MapView>
        </View>        
    );
}

export default Map;