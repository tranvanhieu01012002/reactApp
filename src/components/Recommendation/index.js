import React from 'react';
import { View, TouchableOpacity, Image} from 'react-native';
import styles from './style';

const Recommendation = (props) => {
	const { item, navigation } = props;
	return (
		<View style={styles.recommendation}>
			<TouchableOpacity onPress={() => {
				navigation.push('Details', { movieId: item.id })
			}}>
				<Image style={styles.image} source={{ uri: item.image }} />
			</TouchableOpacity>
		</View>
	);
};

export default Recommendation;