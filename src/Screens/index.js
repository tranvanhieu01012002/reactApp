import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryListing from '../CategoryListing';
import ProductDetail from '../ProductDetail';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                // custom icon here
                    // options={}
             name="Home" component={CategoryListing} />
            <Tab.Screen name="Detail Product" component={ProductDetail} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}