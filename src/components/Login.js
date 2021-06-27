import React, {Component} from 'react';
//--------------------IMPORTS----------------------------
import styles  from '../styles/Index';
import StyleLogin from '../styles/StyleLogin';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity, Alert } from 'react-native';
//--------------------------------------------------------

export default class Welcome extends Component{
    logar = ()=>{
        this.props.navigation.navigate("Welcome",{'data': this.state.nome})
    }
    state = {
        nome : ""
    }
    render(){
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/microsoft.png')}
                    style={StyleLogin.logo}
                />
                <TextInput
                    placeholder="Digite seu usuário"
                    onChangeText = {text => this.state.nome = text}
                    style={StyleLogin.input}
                />
                <TextInput
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    style={StyleLogin.input}
                />
                <View>
                    <TouchableOpacity style={StyleLogin.botao} onPress={this.logar}> 
                        <Text style={StyleLogin.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={StyleLogin.forgetPass} onPress={this.logar}>Esqueceu sua senha?</Text>
            </View>
        )
    }
}