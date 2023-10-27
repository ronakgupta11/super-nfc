import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme,Button } from 'react-native-paper';
import { useDisconnect } from "@thirdweb-dev/react-native";
import ProfilePage from '../containers/screens/ProfilePage'
const ProfilePageStack = () => {
  
  const Stack = createNativeStackNavigator();
  const theme=useTheme()
  const disconnect=useDisconnect()
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
        color: theme.colors.onSecondaryContainer,
        // fontFamily: theme.fonts.titleMedium,
        fontWeight:"bold"
        
      },
      title:"Profile",

      headerStyle: {
        // shadowColor: '#fff',
        elevation: 0,
        backgroundColor:theme.colors.secondaryContainer
      },
    }}
    >
     <Stack.Screen
      name="Profile "
      component={ProfilePage}
    />
    </Stack.Navigator>
  )
}

export default ProfilePageStack