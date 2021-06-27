import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//-------------IMPORTS COMPONENTS---------------
import Welcome from './Welcome'; //EXPORTANDO UM COMPONENT CRIADO
import Login from './Login';
import Perfil from './Perfil';
//-------------NAV IMPORTS ---------------
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/routers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//-----------------------------------

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const WelcomeDrawer = createDrawerNavigator();

WelcomeDrawerScreen = ({navigation}) =>(
  <WelcomeDrawer.Navigator overlayColor='#0000090'
        screenOptions={{
          headerShown:true,
          swipeEnabled: false,
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: "#fff"
          }
        }}>
        <WelcomeDrawer.Screen
         name="Welcome"
         component={Welcome}
         options = {{
           title: "Home",
           drawerIcon:({focused}) => (
            <FontAwesome5
              name = "btc"
              size = {focused ? 25 : 20 }
              //color= {focused ? '0080ff' : '#99999'}
            />
          )
         }}
        />
        <WelcomeDrawer.Screen 
          name="Login"
          component={Login}
          options = {{
            title: "Entrar",
            drawerIcon:({focused}) => (
              <FontAwesome5
                name = "btc"
                size = {focused ? 25 : 20 }
                //color= {focused ? '0080ff' : '#99999'}
              />
            )
          }}        
        />
        <WelcomeDrawer.Screen
          name="Perfil"
          component={Perfil}
          options = {{
            title :"Pefil",
            drawerIcon: ({focus}) =>(
              <FontAwesome5
                name = "btc"
                size = {focus ? 25 : 20 }
              />
            )
          }}
        />
  </WelcomeDrawer.Navigator>

);

function open() {
  return navigator.navigation.openDrawer();
}

const main = (navigation) => {
  return (    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTintColor: 'white', headerStyle: { backgroundColor: 'black' },headerShown: false }}>
          <Stack.Screen name="Login" component={Login}  />
          <Stack.Screen name="Welcome" component={WelcomeDrawerScreen}
            options={{
              title: 'Welcome',
              headerTitleAlign:'center',
              headerStyle:{
                backgroundColor: '#f4511e'
              }
            }}
          />
          <Stack.Screen name="Perfil" component={Perfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    color:"black",
    marginLeft: 10
  },
  header:{
    backgroundColor: '#fff'
  }
})

export default main;