import React, {Component, useState} from "react";
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, TextInput } from "react-native";
import DatePicker from 'react-native-date-picker'
import {Picker} from '@react-native-picker/picker';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import { AuthContext } from "../../App/Context";

//--------------Styles Import---------------------

import styles from "../../styles/Main";
import StyleLogin from "../../styles/StyleLogin";

//------------------------------------------------

const CreateAccount = ({ navigation }) =>{
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [date, setDate] = useState(new Date());
    const [progress] = useState();
    var inicialProgress = 0.5
    const {signUp} = React.useContext(AuthContext);     
    return(
        <View style={styles.container}>
          <TextInput
            style={StyleLogin.inputMail}
            placeholderTextColor="#fff"
            placeholder="Name.."
          />
          <TextInput
            style={StyleLogin.inputMail}
            placeholderTextColor="#fff"
            placeholder="LastName..."
          />
          <TextInput
            style={StyleLogin.inputMail}
            placeholderTextColor="#fff"
            placeholder="Email.."
          />
          <TextInput
            style={StyleLogin.inputMail}
            placeholderTextColor="#fff"
            placeholder="Create a User.."
          />
          <TextInput
            placeholder="Password"
            style={StyleLogin.inputMail}
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
          <TextInput
            style={StyleLogin.inputMail}
            placeholderTextColor="#fff"
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)}
          >
            <Picker.Item label="Gênero" value="" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
          </Picker> 
          <Text> Você selecionou essa linguagem -- {selectedLanguage} </Text>
          <TouchableOpacity style={StyleLogin.btnSignIn}onPress={()=>signUp()}>
            <Text style={StyleLogin.createAcc}>Cadastrar e Entrar</Text>
          </TouchableOpacity>

          {/*
            <ProgressBar  styleAttr="Horizontal" progress = {inicialProgress} indeterminate={false}/>         
            <Button title="Incrementar" />
            <DatePicker date={date} onDateChange={setDate}/>
          */}
          
        </View>
    );
}

export default CreateAccount;
 
