import React from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";

const PerfilScreen = ({ navigation }) =>{
    return(
        <View>
            <Text> Pefil Pessoal</Text>
            <Button
                title="Pressionar"
                onPress= {()=> navigation.toggleDrawer()}
            />
        </View>
    );
}

export default PerfilScreen;