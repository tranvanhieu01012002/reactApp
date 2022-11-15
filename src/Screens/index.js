import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryListing from '../CategoryListing';
import ProductDetail from '../ProductDetail';
import LocationListing from '../LocationListing';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from '../Profile';
import Map from '../Map'
import routes from '../Routes';
const Tab = createBottomTabNavigator();

const DataContext = React.createContext();
function Screens() {
    const [locations,setLocations] = React.useState([]);
    return (
       <DataContext.Provider value={{locations,setLocations}}>
            <NavigationContainer>
            <Tab.Navigator>
                {
                    routes.map((route,index)=>(
                        <Tab.Screen
                            component={route.component}
                            key={index}
                            name={route.name}
                            options={{
                                tabBarLabel: route.name,
                                tabBarIcon:() => (route.icon)
                            }}
                        />
                    ))
                }
            </Tab.Navigator>
            </NavigationContainer>
       </DataContext.Provider>
    );
}
export {Screens,DataContext}