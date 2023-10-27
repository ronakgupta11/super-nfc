import React from 'react'
import { useTheme,Button } from 'react-native-paper';
import { useDisconnect } from "@thirdweb-dev/react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import OngoingStreams from '../containers/screens/OngoingStreams';
import CreateStream from '../components/CreateStream';
import ConfirmStream from '../containers/screens/ConfirmStream';
const StreamPageStack = () => {

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
      title:"Stream",

      headerStyle: {
        // shadowColor: '#fff',
        elevation: 0,
        backgroundColor:theme.colors.secondaryContainer
      },
    }}
    >
     <Stack.Screen
      name="Stream"
      component={CreateStream}

    />
    <Stack.Screen
      name="ConfirmStream"
      component={ConfirmStream}

    />
    </Stack.Navigator>
  )
}

export default StreamPageStack