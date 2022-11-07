import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './style';
 
const GooglePlacesInput = () => {
    const key ='AIzaSyBmTrpNrgloWWDOTaPx4TzqHGH-EDpaWRk';
    return (
        <GooglePlacesAutocomplete
        placeholder="Type a place"
        query={{key: key}}
        fetchDetails={true}
        onPress={(data, details = null) => console.log(data, details)}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
      />
    );
};

export default GooglePlacesInput;