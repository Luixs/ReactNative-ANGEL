import React from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";

const SearchScreen = ({ navigation }) =>{
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

export default SearchScreen;