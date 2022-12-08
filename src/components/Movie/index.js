import React from 'react';
import {View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Movie = (props) => {
	const { item, navigation } = props;
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => {
				navigation.push('Details', { movieId: item.id })
			}}>
				<Image style={styles.image} source={{ uri: item.image }} />
			</TouchableOpacity>
		</View>
	);
};

export default Movie;