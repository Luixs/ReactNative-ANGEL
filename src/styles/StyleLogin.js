import {StyleSheet} from 'react-native';

const StyleLogin = StyleSheet.create({
    text: {
        fontWeight:"bold",
        fontSize:50,
        color:"#be2534"
    },
    inputMail:{
        width:'80%',
        paddingLeft:20,
        marginBottom:15,
        height:50,
        borderRadius: 25,
        backgroundColor: '#2c405b',
    },
    forgot:{
        color:"#fff",
        fontSize:12
    },
    btnSignIn: {
        width:'80%',
        backgroundColor:"#be2534",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    createAcc:{
        color: '#fff'
    }
})


export default StyleLogin;