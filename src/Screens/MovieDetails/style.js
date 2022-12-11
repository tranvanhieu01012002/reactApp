import { StyleSheet,StatusBar } from "react-native";

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: StatusBar.currentHeight || 0,
	},
	img: {
		width: 360,
		height: 500,
	},
	title: {
		marginTop: 20,
		fontSize: 20,
		fontWeight: 'bold'
	},
	overview: {
		marginTop: 20,
		marginBottom: 20,
		width: 350,
	},
	rating: {
		fontWeight: 'bold',
		paddingRight: 40
	},
	release_date: {
		fontWeight: 'bold',
	},
	recs: {
		marginTop: 20,
		width: 360,
	},
	recommendation: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		margin: 1,
	},
	rec_head: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	button:{
		elevation: 8,
		backgroundColor: "#009688",
		borderRadius: 10,
		paddingVertical: 10,
		width:200,
		margin:30,
		paddingHorizontal: 12
	}
});

export default styles;
