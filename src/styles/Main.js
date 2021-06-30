import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: '#001a31'
    },
    logo:{
      width: 300,
      height: 250
    },
    botao:{
      width: "80%",
      height: 50,
      marginTop: -10,
      backgroundColor: "#be2534",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25
     
    },
    text: {
      fontWeight:"bold",
      fontSize:50,
      color:"#be2534",
      marginBottom:-40
    },
    textButton:{
      fontWeight:"bold",
      color: '#fff'
    }
});

export default styles;

