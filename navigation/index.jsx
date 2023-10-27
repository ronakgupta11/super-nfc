import React,{useEffect,useState} from 'react';
import { useAddress,
} from '@thirdweb-dev/react-native';

import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../containers/screens/login/login';

import TabNavigator from './TabNavigator'
const Index = () => {

  const address= useAddress();
  
  const linking = {
    // Prefixes accepted by the navigation container, should match the added schemes
    prefixes: ["supernfc://"],
    // Route config to map uri paths to screens
    config: {
      // Initial route name to be added to the stack before any further navigation,
      // should match one of the available screens
      initialRouteName: "Home",
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
      {address?<TabNavigator/>:<LoginScreen/>}
      
    </NavigationContainer>
  )
}

export default Index