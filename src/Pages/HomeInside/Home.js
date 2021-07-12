import React from "react";

import { View, Text,Button } from "react-native";

const HomeScreen = ({ navigation }) =>{
    return(
        <View>
            <Text> Bem vindo</Text>
            <Button
                title="Perfil"
                onPress= {()=> navigation.push('Perfil')}
            />
            <Button
                title="Navegar"
                onPress= {()=> navigation.toggleDrawer()}
            />
        </View>
    );
}

export default HomeScreen;