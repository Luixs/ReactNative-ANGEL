import React from "react";

import { View, Text, Button } from "react-native";

const SettingScreen = ({ navigation }) =>{
    return(
        <View>
            <Text> Search Screen</Text>
            <Button
                title="Pressionar"
                onPress= {()=> navigation.toggleDrawer()}
            />
        </View>
    );
}

export default SettingScreen;