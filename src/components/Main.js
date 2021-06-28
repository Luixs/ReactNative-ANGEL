import React from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";

const MainScreen = ({ navigation }) =>{
    return(
        <View>
            <Text>Sign In</Text>
            <Button title="Sign In" onPress={()=> navigation.push('Login')}/>
            <Button title="CreateAccout" onPress={()=> navigation.push('CreateAccount')}/>
        </View>
    );
}

export default MainScreen;