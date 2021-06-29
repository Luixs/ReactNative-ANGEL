import React from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { AuthContext } from "../App/Context";

const PerfilScreen = ({ navigation }) =>{
    const { signOut } = React.useContext(AuthContext);
    return(
        <View>
            <Text> Pefil Pessoal</Text>
            <Button
                title="Pressionar"
                onPress= {()=> navigation.toggleDrawer()}
            />
            <Button     
                title="Sair"
                onPress= {()=> signOut()}
            />
        </View>
    );
}

export default PerfilScreen;