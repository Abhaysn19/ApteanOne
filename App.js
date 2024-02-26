import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='HomeScreen'>
        <Drawer.Screen name='HomeScreen' component={HomeScreen}/> 
        <Drawer.Screen name='SettingsScreen' component={SettingsScreen}/>
        <Drawer.Screen name='AboutScreen' component={AboutScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}