import React,{useEffect,useState} from 'react';
import { useAddress,
  ConnectWallet,
    localWallet,
    metamaskWallet,
    rainbowWallet,
    ThirdwebProvider,
} from '@thirdweb-dev/react-native';
import {Celo} from '@thirdweb-dev/chains'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../containers/screens/login/login';

import TabNavigator from '../components/TabNavigator'
import { NativeBaseProvider, Box } from "native-base";
import OngoingStreams from '../containers/screens/OngoingStreams';
import {TW_CLIENT_ID} from '@env';

const Index = () => {
    const Stack = createNativeStackNavigator();
  const address= useAddress();
  const [add,setAdd]=useState(address)
  
  useEffect(()=>{
    console.log(address)
    setAdd(address)
  },[address])
  
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
      {address?<TabNavigator/>:<LoginScreen/>}
    </NavigationContainer>
  )
}

export default Index