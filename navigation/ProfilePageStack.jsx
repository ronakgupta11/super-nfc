import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme,Button } from 'react-native-paper';
import { useDisconnect } from "@thirdweb-dev/react-native";
import ProfilePage from '../containers/screens/ProfilePage'
import StreamDetails from '../containers/screens/StreamDetails';
import QrScannerScreen from '../containers/screens/QrScannerScreen';
const ProfilePageStack = ({navigation}) => {
  
  const Stack = createNativeStackNavigator();
  const theme=useTheme()
  const disconnect=useDisconnect()
  return (
    <Stack.Navigator
    initialRouteName='ProfileScreen'
    screenOptions={{
      headerTitleAlign: 'left',

      
      headerRight:()=>{
       return <Button
       onPress={()=>navigation.navigate("Profile",{screen:"Scanner"})}
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
      name="ProfileScreen"
      component={ProfilePage}
    />

    <Stack.Screen
      name="StreamDetails"
      
      component={StreamDetails}
    />
    <Stack.Screen
      name="Scanner"
      component={QrScannerScreen}
    />
    </Stack.Navigator>
  )
}

export default ProfilePageStack