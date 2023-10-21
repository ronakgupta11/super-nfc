import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import OngoingStreams from '../containers/screens/OngoingStreams';
const StreamPageStack = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen
      name="Stream"
      component={OngoingStreams}
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

export default StreamPageStack