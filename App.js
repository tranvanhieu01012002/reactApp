import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Screens/Home';
import MovieDetails from './src/Screens/MovieDetails';
import Browse from './src/Screens/Browse';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Search = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Details" component={MovieDetails} />
		</Stack.Navigator>
	);
};

const Browser = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Browse" component={Browse} />
			<Stack.Screen name="Details" component={MovieDetails} />
		</Stack.Navigator>
	);
};

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen  name="Search" component={Search} 
				options={{
					tabBarLabel: "Search",
					tabBarIcon: ()=><Icon name="search" size={30}  />
				}}
				/>
				<Tab.Screen name="Browser" component={Browser} 
				options={{
					tabBarLabel: "Browser",
					tabBarIcon: ()=><Icon name="google" size={30}  />
				}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	}
});

export default App;
