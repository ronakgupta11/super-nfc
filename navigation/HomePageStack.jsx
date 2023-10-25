import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { useDisconnect } from "@thirdweb-dev/react-native";
import HomePage from '../containers/screens/HomePage';
import { Button, Icon, MD3Colors } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { View } from 'react-native';
const HomePageStack = ({color}) => {
  const theme = useTheme()
  const disconnect = useDisconnect()
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'left',

      
      headerRight:()=>{
       return <Button
       onPress={disconnect}
        icon={"camera"}
        size={24}
        // color={MD3Colors.error50}
        
/>        

      },

      headerShadowVisible:false,
      headerTitleStyle: {
        color: theme.colors.onPrimary,
        // fontFamily: theme.fonts.titleMedium,
        fontWeight:"bold"
        
      },
      title:"Streams",

      headerStyle: {
        // shadowColor: '#fff',
        elevation: 0,
        backgroundColor:theme.colors.onSecondaryContainer
      },
    }}>
     <Stack.Screen
      name="HomePage"
      component={HomePage}
      
    />
    </Stack.Navigator>
  )
}

export default HomePageStack