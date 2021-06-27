import {StyleSheet} from 'react-native';

const StyleLogin = StyleSheet.create({
    logo:{
        height:130,
        width:130
    },
    input:{
        marginTop:10,
        width:300,
        backgroundColor: 'white',
        borderRadius:6,
        padding:10
    },
    botao:{
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        borderRadius:6,
        width:300,
    },
    textoBotao: {
        color: 'black',
        fontSize: 16
    },
    forgetPass:{
        textAlign:'right',
        color: 'white',
        alignSelf: 'flex-end',
        marginTop:5,
        marginRight:45
    }

})


export default StyleLogin;