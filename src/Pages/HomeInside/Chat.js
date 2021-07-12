import React from "react";

import { View, Text, Button } from "react-native";

const ChatScreen = ({ navigation }) =>{
    return(
        <View>
            <Text> Chat Screen</Text>
            <Button
                title="Pressionar"
                onPress= {()=> navigation.toggleDrawer()}
            />
        </View>
    );
}

export default ChatScreen;