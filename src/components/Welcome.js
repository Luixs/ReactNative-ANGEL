import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//-------------IMPORTS---------------
import styles  from '../styles/Index';
import { TouchableOpacity } from 'react-native';
//-----------------------------------
export default class Welcome extends Component{ 
    render(){
        //const {data} = this.props.route.params;
        return(
            <View style={styles.container}>
                    <Text style={styles.texto}>FUNCIONANDO</Text> 
            </View>
        )
    };
}

