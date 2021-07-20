import React from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../App/Context";

//---------STYLES IMPORTS---------------
import styles from "../../styles/Main";
import StyleLogin from "../../styles/StyleLogin.js";
//--------------------------------------

const LoginScreen = ({ navigation }) =>{
    const {signIn} = React.useContext(AuthContext);
    return(
        <View style={styles.container}>
            <Text style={StyleLogin.text}>ANGEL</Text>
            <TextInput
                placeholder="Email..."
                placeholderTextColor="#fff"
                style={StyleLogin.inputMail}
            />
            <TextInput
                placeholder="Password..."
                placeholderTextColor="#fff"
                secureTextEntry={true}
                style={StyleLogin.inputMail}
            />
            <Text style={StyleLogin.forgot}> Forgot Password? </Text>
            <TouchableOpacity style={StyleLogin.btnSignIn} onPress={()=> signIn()}>
                <Text style={StyleLogin.createAcc}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.push('CreateAccount')}>
                <Text style={StyleLogin.createAcc} >Criar Conta</Text>
            </TouchableOpacity>
            
        </View>
    );
}

export default LoginScreen;