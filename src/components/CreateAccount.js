import React from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";

const CreateAccount = ({ navigation }) =>{
    return(
        <View>
            <Text> Criar Perfil</Text>
            <Button
                title="Pressionar"
                onPress= {()=> Alert.alert("Seu perfil","Montar")}
            />
        </View>
    );
}

export default CreateAccount;