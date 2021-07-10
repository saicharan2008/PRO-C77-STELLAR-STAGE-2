import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import DailyScreen from "./screens/DailyPic";
import SpaceScreen from "./screens/SpaceCrafts";
import HomeScreen from "./screens/Home";
import StarScreen from "./screens/StarMap";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen}/>
     <Stack.Screen name="DailyPic" component={DailyScreen}/>
      <Stack.Screen name="SpaceCrafts" component={SpaceScreen}/>
       <Stack.Screen name="StarMap" component={StarScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App