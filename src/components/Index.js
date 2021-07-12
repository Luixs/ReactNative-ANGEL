import React from 'react';
//-------------------------------IMPORTS------------------------------------
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStyle from '../styles/TabNav.js';
import {View, Text, Image, TouchableOpacity} from 'react-native';
//------------------------------SCREENS-------------------------------------
import LoginScreen from '../Pages/Login/Login.js';
import Home from '../Pages/HomeInside/Home';
import CreateAccount from '../Pages/Login/CreateAccount';
import MainScreen from '../Pages/Initial/Main';
import PerfilScreen from '../Pages/HomeInside/Perfil';
import SearchScreen from '../Pages/HomeInside/Search';
import SettingScreen from '../Pages/HomeInside/Settings.js';
import SplashScreen from '../Pages/Initial/Splash';
import ChatScreen from '../Pages/HomeInside/Chat';
//-------------------------------AUTH---------------------------------------
import { AuthContext } from '../App/Context';
//-------------------------INITIAL CREATING---------------------------------
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const PerfilStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const SettingStack = createStackNavigator();
const ChatStack = createStackNavigator();
//--------------------ROOT-STACK----------------------------------
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
//------------------------STACKS SEASONS CREATION------------------------------

const HomeStackScreen = () =>(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
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
  </PerfilStack.Navigator>
)
const SettingStackScreen = () =>(
  <SettingStack.Navigator>
    <SettingStack.Screen name="Settings" component={SettingScreen} />
  </SettingStack.Navigator>
)
const ChatStackScreen = () =>(
  <ChatStack.Navigator>
    <ChatStack.Screen name="Chat" component={ChatScreen} />
  </ChatStack.Navigator>
)
//-----------------------TABS AND YOUR CUSTOM--------------------------------------

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -5,
      justifyContent: 'center',
      alignItems: 'center',
      ...TabStyle.shadowBt
    }}
    onPress={onPress}
  >
    <View style={{
      width:70,
      height: 70,
      borderRadius: 35,
      backgroundColor: "#e32f45"
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = ()=> (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right:20,
        elevation: 0,
        backgroundColor: "#fff",
        borderRadius: 15,
        height: 90,
        ...TabStyle.shadowBt
      }
    }}
  >
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
              <Image
               source={require('../assets/Icons/home.png')} resizeMode="contain"
               style={{
                 width:25,
                 height:25,
                 tintColor: focused ? "#e32f45" : "#748c94"
                }}
              />
              <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize:12}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Perfil" component={PerfilStackScreen}
        options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
              <Image
               source={require('../assets/Icons/profile.png')} resizeMode="contain"
               style={{
                 width:25,
                 height:25,
                 tintColor: focused ? "#e32f45" : "#748c94"
                }}
              />
              <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize:12}}>Perfil</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Search" component={SearchStackScreen}
        options={{
          tabBarIcon: ({focused}) =>(
            <Image 
              source={require('../assets/Icons/search.png')}
              resizeMode= "contain"
              style={{
                width:30,
                height:30,
                tintColor: "#fff"
              }}
            />
          ),
          tabBarButton: (props) =>(
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen name="Settings" component={SettingStackScreen}
        options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
              <Image
               source={require('../assets/Icons/settings.png')} resizeMode="contain"
               style={{
                 width:25,
                 height:25,
                 tintColor: focused ? "#e32f45" : "#748c94"
                }}
              />
              <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize:12}}>Settings</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Chat" component={ChatStackScreen}
        options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
              <Image
               source={require('../assets/Icons/chat.png')} resizeMode="contain"
               style={{
                 width:25,
                 height:25,
                 tintColor: focused ? "#e32f45" : "#748c94"
                }}
              />
              <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize:12}}>Chat</Text>
            </View>
          ),
        }}      
      />
  </Tab.Navigator>  
)

//---------------------------------------------------------------------------------

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
