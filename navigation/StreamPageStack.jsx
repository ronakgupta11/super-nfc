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

    />
    </Stack.Navigator>
  )
}

export default StreamPageStack