import React from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";

const PerfilScreen = ({ navigation }) =>{
    return(
        <View>
            <Text> Pefil Pessoal</Text>
            <Button
                title="Pressionar"
                onPress= {()=> Alert.alert("Seu perfil","Montar")}
            />
        </View>
    );
}

export default PerfilScreen;