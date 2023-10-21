
import React,{useEffect,useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TW_CLIENT_ID} from '@env';
import  nfcManager  from 'react-native-nfc-manager';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnectWithWallet from './containers/screens/ConnectWithWallet'
import LoginScreen from './containers/screens/login/login';
import HomePage from './containers/screens/homePage';
import TabNavigator from './components/TabNavigator'
import { NativeBaseProvider, Box } from "native-base";
import OngoingStreams from './containers/screens/OngoingStreams';
const App = () => {
  const Stack = createNativeStackNavigator();
  const linking = {
    // Prefixes accepted by the navigation container, should match the added schemes
    prefixes: ["supernfc://"],
    // Route config to map uri paths to screens
    config: {
      // Initial route name to be added to the stack before any further navigation,
      // should match one of the available screens
      initialRouteName: "Home" as const,
      screens: {
        Login:"Login",
        // myapp://home -> HomeScreen
        Home: "stream/:address",
        // myapp://details/1 -> DetailsScreen with param id: 1
      
      },
    },
  };
  return (
    
    <NavigationContainer linking={linking}>
      
      
      <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="Login"  component={LoginScreen}
       options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="Home" component={HomePage} 
        options={{
          headerShown: false,
        }}
      />
      </Stack.Navigator>
      
    </NavigationContainer>
    
    
  );
};

export default App;

