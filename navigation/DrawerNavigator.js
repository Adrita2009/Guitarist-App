import * as React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Chords from '../screens/Chords'
import Sample from '../screens/Sample'
import Steps from '../screens/Steps'
import Tutorial from '../screens/Tutorial'
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return(
      <NavigationContainer>
        <Drawer.Navigator screenOptions={({ route }) => ({
                drawerIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Chords') {
                        iconName = 'musical-notes'
                    } else if (route.name === 'Home') {
                        iconName = 'home'
                    } else if (route.name === 'Tutorial') {
                        iconName = 'phone-landscape'
                    } else if (route.name === 'Sample Tunes') {
                        iconName = 'headset'
                    }
                    else if (route.name === 'Tips') {
                        iconName = 'list'
                    } 
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            drawerOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Chords" component={Chords}/>
        <Drawer.Screen name="Sample Tunes" component={Sample}/>
        <Drawer.Screen name="Tutorial" component={Tutorial}/>
        <Drawer.Screen name="Tips" component={Steps}/>
        </Drawer.Navigator>
      </NavigationContainer>
      
    )
}

export default DrawerNavigator;