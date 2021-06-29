import React from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { AuthContext } from "../App/Context";
const CreateAccount = ({ navigation }) =>{
    const {signUp} = React.useContext(AuthContext);
    return(
        <View>
            <Text> Criar Perfil</Text>
            <Button
                title="Pressionar"
                onPress= {()=> signUp()}
            />
        </View>
    );
}

export default CreateAccount;