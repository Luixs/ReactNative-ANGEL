import React from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { color } from "react-native-reanimated";

import styles from "../styles/Main";

const SplashScreen = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.textButton}> Carregando...</Text>
        </View>
    );
}

export default SplashScreen;