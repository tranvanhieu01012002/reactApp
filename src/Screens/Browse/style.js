import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 375,
        alignItems: 'center',
        marginBottom: 10,
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    popular: {
        marginTop: 10,
    },
    category: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5
    },
    category_head: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 5,
        paddingRight: 5,
    }
});

export default styles;