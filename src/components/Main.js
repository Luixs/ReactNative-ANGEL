import React from "react";
import { View, Text, StyleSheet, Button, Alert, Image, TouchableOpacity } from "react-native";

//-----------------------
import styles from "../styles/Main";


const MainScreen = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>ANGEL</Text>
            <Image
                source={require('../assets/logo2.png')}
                style={ styles.logo }
            />
            <TouchableOpacity style={styles.botao} onPress={()=> navigation.push('Login')}>
                <Text style={styles.textButton}>Entre agora</Text>
            </TouchableOpacity>            
        </View>
    );
}

export default MainScreen;