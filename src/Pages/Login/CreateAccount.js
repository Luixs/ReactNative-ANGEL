import React, {Component} from "react";
import { View, Text, StyleSheet, Button, Alert, TouchableOpacityBase } from "react-native";
import {ProgressBar} from '@react-native-community/progress-bar-android';
import { AuthContext } from "../../App/Context";


const CreateAccount = ({ navigation }) =>{

    const {signUp} = React.useContext(AuthContext);    
    
    return(
        <View>
            <Text> Cadastrar e entrar </Text>
            <Button
                title="Pressionar"
                onPress= {()=> signUp()}
            />
            <ProgressBar  styleAttr="Horizontal"
            />
        </View>
    );
}

export default CreateAccount;
 
