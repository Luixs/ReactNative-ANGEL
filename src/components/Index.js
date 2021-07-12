import React from 'react';
//---------------------------IMPORTS------------------------------
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//--------------------------SCREENS------------------------------
import LoginScreen from '../Pages/Login/Login.js';
import Home from '../Pages/HomeInside/Home';
import CreateAccount from '../Pages/Login/CreateAccount';
import MainScreen from '../Pages/Initial/Main';
import PerfilScreen from '../Pages/HomeInside/Perfil';
import SearchScreen from '../Pages/HomeInside/Search';
import SplashScreen from '../Pages/Initial/Splash';
//---------------------------------------------------------------
import { AuthContext } from '../App/Context';
//---------------------------------------------------------------
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const PerfilStack = createStackNavigator();
const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
//-----------------IMPORT DESIGNS -----------------------------
import styles from '../styles/Main';
import { color } from 'react-native-reanimated';
//--------------------ROOTSTACK----------------------------------
const RootStack = createStackNavigator();
const RootStackScreen = ( {userToken} )=>(
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" component={DrawerScreen}/>
    ) :(
      <RootStack.Screen name="Auth" component={AuthScreen}/>
    )}   
  </RootStack.Navigator>
)
//------------------MAIN STACKS AND DRAWER-----------------------
const DrawerScreen = ()=>(
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Tabs}/> 
    <Drawer.Screen name="Perfil" component={PerfilStackScreen}/> 
  </Drawer.Navigator>
)
const AuthScreen = ()=>(
  <AuthStack.Navigator screenOptions={{headerTitleAlign:'center'}}>
    <AuthStack.Screen name= "Main" component={MainScreen} options={{
      headerShown: false
    }}/>
    <AuthStack.Screen name= "Login" component={LoginScreen} options={{
      headerTitleStyle:{
        color: "#fff"
      },
      headerStyle:{
        backgroundColor: "#be2534"
      },
      title: "WELCOME"
    }}/>
    <AuthStack.Screen name= "CreateAccount" component={CreateAccount} options={{
      title: "Create Account"
    }}/>
  </AuthStack.Navigator>  
)
//---------------------------------------------------------------
const HomeStackScreen = () =>(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
    <HomeStack.Screen name="Perfil" component={PerfilScreen} />
  </HomeStack.Navigator>
)

const SearchStackScreen = () =>(
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen}/>
  </SearchStack.Navigator>
)

const PerfilStackScreen = () =>(
  <PerfilStack.Navigator>
    <PerfilStack.Screen name="Perfil" component={PerfilScreen}/>
    <PerfilStack.Screen name="Home" component={HomeStackScreen}/>
  </PerfilStack.Navigator>
)

const Tabs = ()=> (
  <Tab.Navigator>
      <Tab.Screen name="Main" component={HomeStackScreen}/>
      <Tab.Screen name="Perfil" component={PerfilStackScreen}/>
      <Tab.Screen name="Search" component={SearchStackScreen}/>
  </Tab.Navigator>  
)

export default ()=>{
  //SET A TIME
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(()=>{
    return{
      signIn: ()=> {
        setIsLoading(false);
        setUserToken('abc');
      },
      signUp: ()=> {
        setIsLoading(false);
        setUserToken('abc');
      },
      signOut:()=> {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  },[])

  React.useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },500)
  },[])

  if (isLoading) {
    return <SplashScreen />
  }
  
  return (
  <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStackScreen userToken={userToken}/>
    </NavigationContainer>
  </AuthContext.Provider>
)}
