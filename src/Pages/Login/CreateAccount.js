import React, {Component, useState} from "react";
import { View, Text, StyleSheet, Button, Alert, TouchableOpacityBase } from "react-native";
import {Picker} from '@react-native-picker/picker';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import { AuthContext } from "../../App/Context";


const CreateAccount = ({ navigation }) =>{

    const [selectedLanguage, setSelectedLanguage] = useState();

    const {signUp} = React.useContext(AuthContext);    
    
    return(
        <View>
            <Text> Cadastrar e entrar </Text>
            <Button
                title="Pressionar"
                onPress= {()=> signUp()}
            />
            <ProgressBar  styleAttr="Horizontal"
            />
            <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Select one of this options" value="" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <Text> Você selecionou essa linguagem -- {selectedLanguage}</Text>
        </View>
    );
}

export default CreateAccount;
 
