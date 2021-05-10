import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding:10,
    },
    button: {
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    text: {
        fontSize:12,
        fontWeight:'500',
        textTransform:'uppercase'
    },
    blackBacground: {
        backgroundColor:'#171A20CC'
    },
    whiteBacground: {
        backgroundColor:'#FFFFFFA6'
    },

    blackText: {
        color:'#171A20'
    },
    whiteText: {
        color:'#FFFFFF'
    }
});


export default styles;