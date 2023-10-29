import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomePage from '../containers/screens/HomePage';
import { Button, Icon, MD3Colors } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const HomePageStack = ({color,navigation}) => {
  const theme = useTheme()

  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'left',

      
      headerRight:()=>{
       return <Button
       onPress={()=>navigation.navigate("Profile",{screen:"Scanner"})}
        icon={"qrcode-scan"}
        size={26}

        
/>        
      },

      headerShadowVisible:false,
      headerTitleStyle: {
        color: theme.colors.onSecondaryContainer,
        // fontFamily: theme.fonts.titleMedium,
        fontWeight:"bold"
        
      },
     
      headerStyle: {
        // shadowColor: '#fff',
        elevation: 0,
        backgroundColor:theme.colors.secondaryContainer
      },
    }}>
     <Stack.Screen
      name="HomePage"
      component={HomePage}
    />
    <Stack.Screen
      name="StreamDetails"
      
      component={StreamDetails}
    />
    </Stack.Navigator>
  )
}

export default HomePageStack