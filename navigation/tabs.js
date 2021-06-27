import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
//--------------------IMPORT ROUTES TABS--------------------
import HomeScreen from '../src/components/Welcome';
import PerfilScreen from '../src/components/Perfil';
//----------------------------------------------------------
const Tabs = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component= {HomeScreen}/>
            <Tab.Screen name="Perfil" component= {PerfilScreen}/>
        </Tab.Navigator>
    );
}

export default Tabs;