import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width:150,
        height:230,
        marginBottom:20,
        borderRadius:20
    },
    image:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width:'100%'
    },
    textAre:{
        backgroundColor:'#F5F7FA',
        height:50,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    text:{
        marginLeft:10
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    rate:{
        backgroundColor:'yellow',
        width:50,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        justifyContent:'space-around'
    }
});

export default styles;