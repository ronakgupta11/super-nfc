import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomePage from '../containers/screens/HomePage';
import ConfirmSendStream from '../containers/screens/ConfirmSendStream';
const HomePageStack = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen
      name="HomePage"
      component={HomePage}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="Confirm Stream"
      component={ConfirmSendStream}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />

    </Stack.Navigator>
  )
}

export default HomePageStack