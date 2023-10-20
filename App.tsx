
import React,{useEffect,useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TW_CLIENT_ID} from '@env';
import  nfcManager  from 'react-native-nfc-manager';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnectWithWallet from './containers/screens/ConnectWithWallet'
import LoginScreen from './containers/screens/login/login';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name=" "  component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

