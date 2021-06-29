import React from "react";

import { View, Text, StyleSheet, Button, Alert, TextInput } from "react-native";
import { AuthContext } from "../App/Context";
const LoginScreen = ({ navigation }) =>{
    const {signIn} = React.useContext(AuthContext);
    return(
        <View>
            <TextInput
                placeholder="Digite seu usuário"
                //style={StyleLogin.input}
            />
            <TextInput
                placeholder="Digite sua senha"
                secureTextEntry={true}
                //style={StyleLogin.input}
            />
            <Text> AREA DE LOGIN </Text>
            <Button
                title="Entrar"
                onPress= {()=> signIn()}
            />
        </View>
    );
}

export default LoginScreen;