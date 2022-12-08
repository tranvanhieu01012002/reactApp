import { StyleSheet,StatusBar } from "react-native";

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: StatusBar.currentHeight || 0,
		marginBottom: 20,
	},
	list: {
		marginTop: 10,
		width: 360,
	},
	indicator: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 100,
	}
});
export default styles;