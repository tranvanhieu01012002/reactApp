import { StyleSheet,StatusBar } from "react-native";

const styles = StyleSheet.create({
	searchbar: {
		borderWidth: 1,
		marginTop: StatusBar.currentHeight || 0,
		flexDirection: 'row'
	},
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0.3,
	},
	input: {
		width: 280,
		fontSize: 18,
		justifyContent: 'center',
	}
});

export default styles;