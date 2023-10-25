import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ProfilePage from '../containers/screens/ProfilePage'
const ProfilePageStack = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen
      name="Profile "
      component={ProfilePage}

    />
    </Stack.Navigator>
  )
}

export default ProfilePageStack