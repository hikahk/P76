import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import  {NavigationContainer} from '@react-navigation/native'
import HomeScreen from "./screens/Home";
import DPScreen from "./screens/DailyPic";
import SCScreen from "./screens/SpaceCraft";
import SMScreen from "./screens/StarMap";

const Stack = createStackNavigator();


export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{
  headerShown:false
  
}} >

<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="DailyPic" component={DPScreen} />
<Stack.Screen name="SpaceCraft" component={SCScreen} />
<Stack.Screen name="StarMap" component={SMScreen} />

</Stack.Navigator>
</NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
