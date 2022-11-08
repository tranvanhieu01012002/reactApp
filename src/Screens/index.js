import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryListing from '../CategoryListing';
import ProductDetail from '../ProductDetail';
import LocationListing from '../LocationListing';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from '../Profile';
import Map from '../Map'
const Tab = createBottomTabNavigator();

const DataContext = React.createContext();
function Screens() {
    const [locations,setLocations] = React.useState([{
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
    
    

    return (
       <DataContext.Provider value={{locations,setLocations}}>
            <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="eye" color={color} size={size} />
                    ),
                }}
                name="My profile" component={Profile} />
                <Tab.Screen 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                name="Category Listing" component={CategoryListing} />
                 <Tab.Screen name="location" component={LocationListing} 
                    options={{
                        tabBarLabel: 'Location',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="paper-plane" color={color} size={size} />
                        ),
                    }}
                /> 
                {/* <Tab.Screen name="Detail Product" component={ProductDetail} 
                options={{
                    tabBarLabel: 'Detail product',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="phone" color={color} size={size} />
                    ),
                }}
            /> */}
                 <Tab.Screen name="Google Map" component={Map} 
                    options={{
                        tabBarLabel: 'Google Map',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="map" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
            </NavigationContainer>
       </DataContext.Provider>
    );
}
export {Screens,DataContext}