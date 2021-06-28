import React from 'react';
//---------------------------IMPORTS------------------------------
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//--------------------------SCREENS------------------------------
import Login from './Login';
import Welcome from './Welcome';
import CreateAccount from './CreateAccount';
import MainScreen from './Main';
import PerfilScreen from './Perfil';
import SearchScreen from './Search';
import SplashScreen from './Splash';
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
//-----------------CREATE A SCREEN-----------------------------
const HomeStackScreen = () =>(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Welcome}/>
    <HomeStack.Screen name="Perfil" component={PerfilScreen}/>
  </HomeStack.Navigator>
)

const MainStackScreen = () =>(
  <MainStack.Navigator>
    <MainStack.Screen name="Main" component={MainScreen}/>
  </MainStack.Navigator>
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
      singOut:()=> {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  },[])

  React.useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },100)
  },[])

  if (isLoading) {
    return <SplashScreen />
  }
  
  return (
  <AuthContext.Provider value={AuthContext}>
  <NavigationContainer>
    {userToken ? (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Tabs}/> 
        <Drawer.Screen name="Perfil" component={PerfilStackScreen}/> 
      </Drawer.Navigator>
    ): (
        <AuthStack.Navigator>
        <AuthStack.Screen name= "Main" component={MainStackScreen} options={{
          headerShown: false
        }}/>
        <AuthStack.Screen name= "Login"  component={Login}/>
        <AuthStack.Screen name= "CreateAccount"  component={CreateAccount} options={{
          title: "Create Account"
        }}/>
        </AuthStack.Navigator>
      )}
  </NavigationContainer>
  </AuthContext.Provider>
)}
