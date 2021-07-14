import React from "react";

const data = require("../../../assets/data/profileList.json");

const dataT = [{nome: "Luis"},{nome:"Carolina"}]

import { View, Text,Button, FlatList } from "react-native";

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
            <FlatList 
                data={data}
                renderItem= {({item}) => <Text>{item.key} {item.User}</Text>}
            />
        </View>
    );
}

export default HomeScreen;