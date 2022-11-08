import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#ffff',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        padding:3
    },
    icon:{
        flex:2
    },
    task:{
        flex:8
    },
    more:{
        flex:1,
    }
    ,edit:{
        flex:1
    },
    delete:{
        flex:1
    }
});
export default styles;